import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  signup(dto: AuthDto) {
    return { dto };
  }

  signin(dto: AuthDto) {
    return { dto };
  }
}
