import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  NotEquals,
  ValidateIf,
} from 'class-validator';

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
  passwordConfirmation?: string;
}
