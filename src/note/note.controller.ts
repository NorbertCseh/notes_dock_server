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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { CreateNoteDto, EditNoteDto } from './dto';
import { NoteService } from './note.service';

@UseGuards(JwtGuard)
@Controller('note')
@ApiBearerAuth()
@ApiTags('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  @ApiOperation({ summary: 'Get all notes by user' })
  getAllNotes(@GetUser('id') userId: string) {
    return this.noteService.getAllNotes(userId);
  }
  //Get single note id
  @Get(':noteId')
  @ApiOperation({ summary: 'Get single note' })
  getNoteById(@GetUser('id') userId: string, @Param('noteId') noteId: string) {
    return this.noteService.getNoteById(userId, noteId);
  }

  //Create new note
  @Post()
  @ApiOperation({ summary: 'Create note' })
  createNote(@GetUser('id') userId: string, @Body() dto: CreateNoteDto) {
    return this.noteService.createNote(userId, dto);
  }
  //Update note by id
  @Patch(':noteId')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'Update note' })
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
  @ApiOperation({ summary: 'Delete note' })
  deleteNoteById(
    @GetUser('id') userId: string,
    @Param('noteId') noteId: string,
  ) {
    return this.noteService.deleteNoteById(userId, noteId);
  }
}
