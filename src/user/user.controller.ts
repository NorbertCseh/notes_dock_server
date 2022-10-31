import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async signupUser(
    @Body() userData: { email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
