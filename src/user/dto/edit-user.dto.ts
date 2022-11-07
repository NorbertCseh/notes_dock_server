import { IsEmail, IsString, NotEquals, ValidateIf } from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  email?: string;
  @IsString()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  password?: string;
  @IsString()
  @NotEquals(null)
  @ValidateIf((_, value) => value !== undefined)
  passwordConfirmation?: string;
}
