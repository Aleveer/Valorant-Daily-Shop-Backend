import { Injectable } from '@nestjs/common';
import {
  BATTLEPASS_SAMPLE_TIERS,
  CURRENT_BP_CONTRACT_ID,
  CURRENT_BP_SEASON,
  BattlepassTier,
} from './battlepass-tiers.generated';

@Injectable()
export class BattlepassTiersService {
  getCurrentSeasonId(): string {
    return CURRENT_BP_SEASON;
  }

  getCurrentContractId(): string {
    return CURRENT_BP_CONTRACT_ID;
  }

  getTiers(): BattlepassTier[] {
    return BATTLEPASS_SAMPLE_TIERS;
  }

  buildProgressFromContracts(contractsData: any) {
    const contracts = contractsData.Contracts || [];

    // Ưu tiên contractId được config, nhưng nếu vẫn là placeholder
    // hoặc không tìm thấy, fallback chọn contract có ProgressionLevelReached cao nhất.
    let contract =
      contracts.find(
        (c: any) => c.ContractDefinitionID === CURRENT_BP_CONTRACT_ID,
      ) || null;

    const isPlaceholderId =
      !CURRENT_BP_CONTRACT_ID ||
      CURRENT_BP_CONTRACT_ID.startsWith('sample-') ||
      CURRENT_BP_CONTRACT_ID === 'sample-contract-id-thay-bang-that';

    if (!contract || isPlaceholderId) {
      contract = contracts.reduce((best: any, c: any) => {
        if (!best) return c;
        const bestLvl = best.ProgressionLevelReached ?? 0;
        const curLvl = c.ProgressionLevelReached ?? 0;
        return curLvl > bestLvl ? c : best;
      }, null);
    }

    const usedContractId =
      contract?.ContractDefinitionID || CURRENT_BP_CONTRACT_ID;

    if (!contract) {
      return {
        season: CURRENT_BP_SEASON,
        contractId: usedContractId,
        currentLevel: 0,
        totalXP: 0,
        tiers: this.getTiers().map((tier) => ({
          ...tier,
          claimed: false,
        })),
      };
    }

    const currentLevel = contract.ProgressionLevelReached ?? 0;
    const totalXP = contract.ContractProgression?.TotalProgressionEarned ?? 0;

    const highestRewarded = contract.HighestRewardedLevel || {};

    const tiersWithState = this.getTiers().map((tier) => {
      // Một số implement dùng key "level_10", v.v.
      const hasKeyExact = Object.prototype.hasOwnProperty.call(
        highestRewarded,
        `${tier.level}`,
      );
      const hasKeyPrefixed = Object.keys(highestRewarded).some((k) => {
        const num = parseInt(k.replace(/^\D+/g, ''), 10);
        return !Number.isNaN(num) && num === tier.level;
      });

      const claimed = hasKeyExact || hasKeyPrefixed;

      return {
        ...tier,
        claimed,
      };
    });

    return {
      season: CURRENT_BP_SEASON,
      contractId: usedContractId,
      currentLevel,
      totalXP,
      tiers: tiersWithState,
    };
  }
}
