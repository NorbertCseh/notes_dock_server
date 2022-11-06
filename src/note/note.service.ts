import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateNoteDto, EditNoteDto } from './dto';

@Injectable()
export class NoteService {
  //Get all notes
  getAllNotes(user: User) {
    return 'all notes';
  }
  //Get Single note by id
  getNoteById(user: User, noteId: string) {
    return 'one note';
  }
  //Create note
  createNote(user: User, dto: CreateNoteDto) {
    return 'this is a new note';
  }
  //Edit note by id
  editNoteById(user: User, noteId: string, dto: EditNoteDto) {
    return 'note edited';
  }
  //Delete note by id
  deleteNoteById(user: User, noteId: string) {
    return 'note deleted';
  }
}
