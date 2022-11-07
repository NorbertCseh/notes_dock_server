import { IsOptional, IsString, NotEquals, ValidateIf } from 'class-validator';

export class EditNoteDto {
  @IsString()
  @NotEquals(null)
  @ValidateIf((object, value) => value !== undefined)
  title?: string;
  @IsString()
  @IsOptional()
  body?: string;
}
