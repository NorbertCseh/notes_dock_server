import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  NotEquals,
  ValidateIf,
} from 'class-validator';
import { Match } from 'src/auth/decorator';

export class EditUserDto {
  @IsEmail()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  email?: string;
  @IsString()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  @MinLength(4)
  @MaxLength(20)
  password?: string;
  @IsString()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  @MinLength(4)
  @MaxLength(20)
  @Match('password', { message: 'Passowrds are not equal' })
  passwordConfirmation?: string;
}
