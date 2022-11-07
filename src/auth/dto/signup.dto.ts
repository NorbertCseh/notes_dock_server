import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '../decorator';

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
  @IsString()
  @IsNotEmpty()
  @Match('password', { message: 'Passowrds are not equal' })
  @MinLength(6)
  @MaxLength(20)
  passwordConfirmation: string;
}
