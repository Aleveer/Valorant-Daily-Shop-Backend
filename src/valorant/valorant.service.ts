import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpException } from '@nestjs/common';
import axios from 'axios';
import { ValorantAssetsService } from './valorant-assets.service';

const VCurrencies = {
  VP: '85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741',
  RAD: 'e59aa87c-4cbf-517a-5983-6e81511be9b7',
  FAG: 'f08d4ae3-939c-4576-ab26-09ce1f23bb37',
  KC: '85ca954a-41f2-ce94-9b45-8ca3dd39a00d',
};

const VItemTypes = {
  SkinLevel: 'e7c63390-eda7-46e0-bb7a-a6abdacd2433',
  SkinChroma: '3ad1b2b2-acdb-4524-852f-954a76ddae0a',
  Agent: '01bb38e1-da47-4e6a-9b3d-945fe4655707',
  ContractDefinition: 'f85cb6f7-33e5-4dc8-b609-ec7212301948',
  Buddy: 'dd3bf334-87f3-40bd-b043-682a57a8dc3a',
  Spray: 'd5f120f8-ff8c-4aac-92ea-f2b5acbe9475',
  PlayerCard: '3f296c07-64c3-494c-923b-fe692a4fa1bd',
  PlayerTitle: 'de7caa6b-adf7-4588-bbd1-143831e786c6',
};

@Injectable()
export class ValorantService {
  constructor(
    private configService: ConfigService,
    private valorantAssetsService: ValorantAssetsService,
  ) {}

  private getExtraHeaders() {
    const assetsVersion =
      this.valorantAssetsService.getAssets().riotClientVersion;
    const cfgVersion =
      this.configService.get<string>('riot.clientVersion') ||
      '43.0.1.4195386.4190634';
    const clientVersion = assetsVersion || cfgVersion;

    return {
      'X-Riot-ClientVersion': clientVersion,
      'X-Riot-ClientPlatform':
        this.configService.get<string>('riot.clientPlatform') ||
        'eyJwbGF0Zm9ybVR5cGUiOiJQQyIsInBsYXRmb3JtT1MiOiJXaW5kb3dzIiwicGxhdGZvcm1PU1ZlcnNpb24iOiIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwicGxhdGZvcm1DaGlwc2V0IjoiVW5rbm93biJ9',
    };
  }

  private validateRegion(region: string): string {
    const validRegions = ['na', 'eu', 'ap', 'kr'];
    return validRegions.includes(region) ? region : 'na';
  }

  async getShop(
    accessToken: string,
    entitlementsToken: string,
    region: string,
    userId: string,
  ) {
    const validRegion = this.validateRegion(region);
    try {
      const res = await axios.post(
        `https://pd.${validRegion}.a.pvp.net/store/v3/storefront/${userId}`,
        {},
        {
          headers: {
            ...this.getExtraHeaders(),
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return this.parseShop(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getShop:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
        });
        throw new Error(
          `Failed to get shop: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

  async parseShop(shop: any) {
    await this.valorantAssetsService.loadAssets();
    const { skins, buddies, cards, sprays, titles } =
      this.valorantAssetsService.getAssets();

    // NORMAL SHOP
    const singleItemStoreOffers = shop.SkinsPanelLayout.SingleItemStoreOffers;
    const main: any[] = [];

    for (let i = 0; i < singleItemStoreOffers.length; i++) {
      const offer = singleItemStoreOffers[i];
      const skin = skins.find(
        (_skin) => _skin.levels[0].uuid === offer.OfferID,
      );

      if (skin) {
        main[i] = {
          ...skin,
          price: offer.Cost[VCurrencies.VP],
        };
      }
    }

    // BUNDLES
    const bundles: any[] = [];
    for (let b = 0; b < shop.FeaturedBundle.Bundles.length; b++) {
      const bundle = shop.FeaturedBundle.Bundles[b];
      const bundleAsset = await this.valorantAssetsService.fetchBundle(
        bundle.DataAssetID,
      );

      if (bundleAsset != null) {
        bundles.push({
          ...bundleAsset,
          price: bundle.Items.map((item) => item.DiscountedPrice).reduce(
            (a, b) => a + b,
            0,
          ),
          items: bundle.Items.filter(
            (item) => item.Item.ItemTypeID === VItemTypes.SkinLevel,
          ).map((item) => {
            const skin = skins.find(
              (_skin) => _skin.levels[0].uuid === item.Item.ItemID,
            );

            return {
              ...skin,
              price: item.BasePrice,
            };
          }),
        });
      }
    }

    // NIGHT MARKET
    const nightMarket: any[] = [];
    if (shop.BonusStore) {
      const bonusStore = shop.BonusStore.BonusStoreOffers;
      for (let k = 0; k < bonusStore.length; k++) {
        const itemid = bonusStore[k].Offer.Rewards[0].ItemID;
        const skin = skins.find((_skin) => _skin.levels[0].uuid === itemid);

        if (skin) {
          nightMarket.push({
            ...skin,
            price: bonusStore[k].Offer.Cost[VCurrencies.VP],
            discountedPrice: bonusStore[k].DiscountCosts[VCurrencies.VP],
            discountPercent: bonusStore[k].DiscountPercent,
          });
        }
      }
    }

    // ACCESSORY SHOP
    const accessoryStore = shop.AccessoryStore.AccessoryStoreOffers;
    const accessory: any[] = [];
    for (let i = 0; i < accessoryStore.length; i++) {
      const accessoryItem = accessoryStore[i].Offer;

      const buddy = buddies.find(
        (_skin) => _skin.levels[0].uuid === accessoryItem.Rewards[0].ItemID,
      );
      const card = cards.find(
        (_skin) => _skin.uuid === accessoryItem.Rewards[0].ItemID,
      );
      const title = titles.find(
        (_skin) => _skin.uuid === accessoryItem.Rewards[0].ItemID,
      );
      const spray = sprays.find(
        (_skin) => _skin.uuid === accessoryItem.Rewards[0].ItemID,
      );

      if (buddy) {
        accessory[i] = {
          uuid: buddy.levels[0].uuid,
          displayName: buddy.displayName,
          displayIcon: buddy.levels[0].displayIcon,
          price: accessoryItem.Cost[VCurrencies.KC],
        };
      } else if (card) {
        accessory[i] = {
          uuid: card.uuid,
          displayName: card.displayName,
          displayIcon: card.largeArt,
          price: accessoryItem.Cost[VCurrencies.KC],
        };
      } else if (title) {
        accessory[i] = {
          uuid: title.uuid,
          displayName: title.displayName,
          price: accessoryItem.Cost[VCurrencies.KC],
        };
      } else if (spray) {
        accessory[i] = {
          uuid: spray.uuid,
          displayName: spray.displayName,
          displayIcon: spray.fullTransparentIcon,
          price: accessoryItem.Cost[VCurrencies.KC],
        };
      }
    }

    return {
      main,
      bundles,
      nightMarket,
      accessory,
      remainingSecs: {
        main:
          shop.SkinsPanelLayout.SingleItemOffersRemainingDurationInSeconds ?? 0,
        bundles: shop.FeaturedBundle.Bundles.map(
          (bundle) => bundle.DurationRemainingInSeconds,
        ) ?? [0],
        nightMarket: shop.BonusStore?.BonusStoreRemainingDurationInSeconds ?? 0,
        accessory:
          shop.AccessoryStore.AccessoryStoreRemainingDurationInSeconds ?? 0,
      },
    };
  }

  async getBalances(
    accessToken: string,
    entitlementsToken: string,
    region: string,
    userId: string,
  ) {
    const validRegion = this.validateRegion(region);
    try {
      const res = await axios.get(
        `https://pd.${validRegion}.a.pvp.net/store/v1/wallet/${userId}`,
        {
          headers: {
            ...this.getExtraHeaders(),
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return {
        vp: res.data.Balances[VCurrencies.VP] || 0,
        rad: res.data.Balances[VCurrencies.RAD] || 0,
        fag: res.data.Balances[VCurrencies.FAG] || 0,
        kc: res.data.Balances[VCurrencies.KC] || 0,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getBalances:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
        });
        throw new Error(
          `Failed to get balances: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

  async getLoadout(
    accessToken: string,
    entitlementsToken: string,
    region: string,
    userId: string,
  ) {
    const validRegion = this.validateRegion(region);
    try {
      const res = await axios.get(
        `https://pd.${validRegion}.a.pvp.net/personalization/v2/players/${userId}/playerloadout`,
        {
          headers: {
            ...this.getExtraHeaders(),
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return {
        subject: res.data.Subject,
        version: res.data.Version,
        incognito: res.data.Incognito,
        guns: res.data.Guns.map((gun) => ({
          id: gun.ID,
          charmInstanceID: gun.CharmInstanceID ?? '',
          charmID: gun.CharmID ?? '',
          charmLevelID: gun.CharmLevelID ?? '',
          skinID: gun.SkinID,
          skinLevelID: gun.SkinLevelID,
          chromaID: gun.ChromaID,
          attachments: gun.Attachments,
        })),
        sprays: res.data.Sprays.map((spray) => ({
          equipSlotID: spray.EquipSlotID,
          sprayID: spray.SprayID,
          sprayLevelID: spray.SprayLevelID ?? '',
        })),
        identity: {
          playerCardID: res.data.Identity.PlayerCardID,
          playerTitleID: res.data.Identity.PlayerTitleID,
          accountLevel: res.data.Identity.AccountLevel,
          preferredLevelBorderID: res.data.Identity.PreferredLevelBorderID,
          hideAccountLevel: res.data.Identity.HideAccountLevel,
        },
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getLoadout:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
        });
        throw new Error(
          `Failed to get loadout: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

  async getOwnedItems(
    accessToken: string,
    entitlementsToken: string,
    region: string,
    userId: string,
    itemType: string,
  ) {
    const validRegion = this.validateRegion(region);
    try {
      const res = await axios.get(
        `https://pd.${validRegion}.a.pvp.net/store/v1/entitlements/${userId}/${itemType}`,
        {
          headers: {
            ...this.getExtraHeaders(),
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getOwnedItems:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
          itemType,
        });
        throw new HttpException(
          {
            message:
              error.response?.data?.message ||
              error.response?.data?.error ||
              error.response?.data ||
              error.message ||
              'Failed to get owned items',
          },
          error.response?.status || 502,
        );
      }
      throw error;
    }
  }

  async getProgress(
    accessToken: string,
    entitlementsToken: string,
    region: string,
    userId: string,
  ) {
    const validRegion = this.validateRegion(region);
    try {
      const res = await axios.get(
        `https://pd.${validRegion}.a.pvp.net/account-xp/v1/players/${userId}`,
        {
          headers: {
            ...this.getExtraHeaders(),
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return {
        level: res.data.Progress.Level,
        xp: res.data.Progress.XP,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getProgress:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
        });
        throw new Error(
          `Failed to get progress: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

}
