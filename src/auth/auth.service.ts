import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async getEntitlementsToken(accessToken: string): Promise<string> {
    const res = await axios.post<{ entitlements_token: string }>(
      'https://entitlements.auth.riotgames.com/api/token/v1/',
      {},
      {
        headers: {
          'X-Riot-ClientVersion':
            this.configService.get<string>('riot.clientVersion') ||
            '43.0.1.4195386.4190634',
          'X-Riot-ClientPlatform':
            this.configService.get<string>('riot.clientPlatform') ||
            'eyJwbGF0Zm9ybVR5cGUiOiJQQyIsInBsYXRmb3JtT1MiOiJXaW5kb3dzIiwicGxhdGZvcm1PU1ZlcnNpb24iOiIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwicGxhdGZvcm1DaGlwc2V0IjoiVW5rbm93biJ9',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return res.data.entitlements_token;
  }

  getUserId(accessToken: string): string {
    const decoded = jwtDecode<{ sub: string }>(accessToken);
    return decoded.sub;
  }

  async getUsername(
    accessToken: string,
    entitlementsToken: string,
    userId: string,
    region: string,
  ): Promise<string> {
    // Validate and default region
    const validRegions = ['na', 'eu', 'ap', 'kr'];
    const validRegion = validRegions.includes(region) ? region : 'na';

    try {
      const res = await axios.put<Array<{ GameName: string; TagLine: string }>>(
        `https://pd.${validRegion}.a.pvp.net/name-service/v2/players`,
        [userId],
        {
          headers: {
            'X-Riot-ClientVersion':
              this.configService.get<string>('riot.clientVersion') ||
              '43.0.1.4195386.4190634',
            'X-Riot-ClientPlatform':
              this.configService.get<string>('riot.clientPlatform') ||
              'eyJwbGF0Zm9ybVR5cGUiOiJQQyIsInBsYXRmb3JtT1MiOiJXaW5kb3dzIiwicGxhdGZvcm1PU1ZlcnNpb24iOiIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwicGxhdGZvcm1DaGlwc2V0IjoiVW5rbm93biJ9',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'X-Riot-Entitlements-JWT': entitlementsToken,
          },
        },
      );

      return res.data[0]?.GameName || '?';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Riot API Error in getUsername:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          region: validRegion,
          userId: userId.substring(0, 8) + '...',
        });
        throw new Error(
          `Failed to get username: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }
}
