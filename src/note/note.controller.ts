import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateNoteDto, EditNoteDto } from './dto';
import { NoteService } from './note.service';

@UseGuards(JwtGuard)
@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}
  //Get all the notes by user
  @Get()
  getAllNotes(@GetUser() user: User) {
    return this.noteService.getAllNotes(user);
  }
  //Get single note id
  @Get(':noteId')
  getNoteById(@GetUser() user: User, @Param() noteId: string) {
    return this.noteService.getNoteById(user, noteId);
  }

  //Create new note
  @Post()
  createNote(@GetUser() user: User, @Body() dto: CreateNoteDto) {
    return this.noteService.createNote(user, dto);
  }
  //Update note by id
  @Patch(':noteId')
  @HttpCode(HttpStatus.ACCEPTED)
  editNoteById(
    @GetUser() user: User,
    @Param() noteId: string,
    @Body() dto: EditNoteDto,
  ) {
    return this.noteService.editNoteById(user, noteId, dto);
  }
  //Delete note by id
  @Delete(':noteId')
  deleteNoteById(@GetUser() user: User, @Param() noteId: string) {
    return this.noteService.deleteNoteById(user, noteId);
  }
}
