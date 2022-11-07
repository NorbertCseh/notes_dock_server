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
  getAllNotes(@GetUser('id') userId: string) {
    return this.noteService.getAllNotes(userId);
  }
  //Get single note id
  @Get(':noteId')
  getNoteById(@GetUser('id') userId: string, @Param('noteId') noteId: string) {
    return this.noteService.getNoteById(userId, noteId);
  }

  //Create new note
  @Post()
  createNote(@GetUser('id') userId: string, @Body() dto: CreateNoteDto) {
    return this.noteService.createNote(userId, dto);
  }
  //Update note by id
  @Patch(':noteId')
  @HttpCode(HttpStatus.ACCEPTED)
  editNoteById(
    @GetUser('id') userId: string,
    @Param('noteId') noteId: string,
    @Body() dto: EditNoteDto,
  ) {
    return this.noteService.editNoteById(userId, noteId, dto);
  }
  //Delete note by id
  @Delete(':noteId')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteNoteById(
    @GetUser('id') userId: string,
    @Param('noteId') noteId: string,
  ) {
    return this.noteService.deleteNoteById(userId, noteId);
  }
}
