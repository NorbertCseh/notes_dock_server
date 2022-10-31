import { Controller, Get } from '@nestjs/common';

@Controller('note')
export class NoteController {
  @Get()
  test(): string {
    return 'users works';
  }
}
