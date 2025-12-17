import { Controller, Post, Body, Get, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import { ValorantService } from './valorant.service';
import {
  GetShopDto,
  GetBalancesDto,
  GetLoadoutDto,
  GetProgressDto,
  GetOwnedItemsDto,
  GetBattlepassDto,
} from './dto/valorant.dto';

@Controller('valorant')
export class ValorantController {
  constructor(private readonly valorantService: ValorantService) {}

  @Post('shop')
  async getShop(@Body() dto: GetShopDto) {
    return this.valorantService.getShop(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
    );
  }

  @Post('balances')
  async getBalances(@Body() dto: GetBalancesDto) {
    return this.valorantService.getBalances(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
    );
  }

  @Post('loadout')
  async getLoadout(@Body() dto: GetLoadoutDto) {
    return this.valorantService.getLoadout(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
    );
  }

  @Post('progress')
  async getProgress(@Body() dto: GetProgressDto) {
    return this.valorantService.getProgress(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
    );
  }

  @Post('battlepass')
  async getBattlepass(@Body() dto: GetBattlepassDto) {
    return this.valorantService.getBattlepassProgress(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
    );
  }

  @Post('owned-items')
  async getOwnedItems(@Body() dto: GetOwnedItemsDto) {
    return this.valorantService.getOwnedItems(
      dto.accessToken,
      dto.entitlementsToken,
      dto.region,
      dto.userId,
      dto.itemType,
    );
  }

  @Get('image-proxy')
  async proxyImage(@Query('url') url: string, @Res() res: Response) {
    const result = await this.valorantService.proxyExternalImage(url);
    res.setHeader('Content-Type', result.contentType);
    return res.send(result.data);
  }
}
