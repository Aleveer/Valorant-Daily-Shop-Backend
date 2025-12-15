import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('entitlements')
  async getEntitlements(@Body('accessToken') accessToken: string) {
    const entitlementsToken =
      await this.authService.getEntitlementsToken(accessToken);
    return { entitlements_token: entitlementsToken };
  }

  @Get('user-id')
  getUserId(@Query('accessToken') accessToken: string) {
    const userId = this.authService.getUserId(accessToken);
    return { userId };
  }

  @Get('username')
  async getUsername(
    @Query('accessToken') accessToken: string,
    @Query('entitlementsToken') entitlementsToken: string,
    @Query('userId') userId: string,
    @Query('region') region: string,
  ) {
    const username = await this.authService.getUsername(
      accessToken,
      entitlementsToken,
      userId,
      region,
    );
    return { username };
  }
}
