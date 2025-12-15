import { Module } from '@nestjs/common';
import { ValorantController } from './valorant.controller';
import { ValorantService } from './valorant.service';
import { ValorantAssetsService } from './valorant-assets.service';

@Module({
  controllers: [ValorantController],
  providers: [ValorantService, ValorantAssetsService],
  exports: [ValorantService, ValorantAssetsService],
})
export class ValorantModule {}
