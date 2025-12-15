import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':riotId')
  async getUser(@Param('riotId') riotId: string) {
    const user = await this.userService.findOne(riotId);
    return user;
  }
}
