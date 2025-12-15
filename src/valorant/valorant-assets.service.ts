import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ValorantAssetsService {
  private assets: {
    riotClientVersion?: string;
    language?: string;
    skins: any[];
    buddies: any[];
    sprays: any[];
    cards: any[];
    titles: any[];
  } = {
    skins: [],
    buddies: [],
    sprays: [],
    cards: [],
    titles: [],
  };

  async fetchVersion(): Promise<string> {
    const res = await axios.get('https://valorant-api.com/v1/version');
    return res.data.data.riotClientVersion;
  }

  async fetchSkins(language: string = 'en-US'): Promise<any[]> {
    const res = await axios.get(
      `https://valorant-api.com/v1/weapons/skins?language=${language}`,
    );
    return res.data.data;
  }

  async fetchBuddies(language: string = 'en-US'): Promise<any[]> {
    const res = await axios.get(
      `https://valorant-api.com/v1/buddies?language=${language}`,
    );
    return res.data.data;
  }

  async fetchSprays(language: string = 'en-US'): Promise<any[]> {
    const res = await axios.get(
      `https://valorant-api.com/v1/sprays?language=${language}`,
    );
    return res.data.data;
  }

  async fetchPlayerCards(language: string = 'en-US'): Promise<any[]> {
    const res = await axios.get(
      `https://valorant-api.com/v1/playercards?language=${language}`,
    );
    return res.data.data;
  }

  async fetchPlayerTitles(language: string = 'en-US'): Promise<any[]> {
    const res = await axios.get(
      `https://valorant-api.com/v1/playertitles?language=${language}`,
    );
    return res.data.data;
  }

  async fetchBundle(
    bundleId: string,
    language: string = 'en-US',
  ): Promise<any | null> {
    try {
      const res = await axios.get(
        `https://valorant-api.com/v1/bundles/${bundleId}?language=${language}`,
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
  }

  getAssets() {
    return this.assets;
  }

  async loadAssets(language: string = 'en-US') {
    const version = await this.fetchVersion();

    if (
      this.assets.riotClientVersion === version &&
      this.assets.language === language
    ) {
      return;
    }

    this.assets.riotClientVersion = version;
    this.assets.language = language;
    this.assets.skins = await this.fetchSkins(language);
    this.assets.buddies = await this.fetchBuddies(language);
    this.assets.sprays = await this.fetchSprays(language);
    this.assets.cards = await this.fetchPlayerCards(language);
    this.assets.titles = await this.fetchPlayerTitles(language);
  }
}
