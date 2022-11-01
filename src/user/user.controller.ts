import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async signupUser(
    @Body() userData: { email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async loginUser(
    @Body() userData: { email: string; password: string },
  ): Promise<UserModel | null> {
    return this.authService.validateUser(userData.email, userData.password);
  }
}
