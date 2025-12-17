import { Module } from '@nestjs/common';
import { ValorantController } from './valorant.controller';
import { ValorantService } from './valorant.service';
import { ValorantAssetsService } from './valorant-assets.service';
import { BattlepassTiersService } from './battlepass-tiers.service';

@Module({
  controllers: [ValorantController],
  providers: [ValorantService, ValorantAssetsService, BattlepassTiersService],
  exports: [ValorantService, ValorantAssetsService, BattlepassTiersService],
})
export class ValorantModule {}
