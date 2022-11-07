import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto, EditNoteDto } from './dto';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}
  //Get all notes
  async getAllNotes(userId: string) {
    return await this.prisma.note.findMany({
      where: {
        userId: userId,
      },
    });
  }
  //Get Single note by id
  async getNoteById(userId: string, noteId: string) {
    const note = await this.prisma.note.findUnique({ where: { id: noteId } });
    if (!note || note.userId !== userId) {
      throw new ForbiddenException('Access to rescource denied');
    }
    return note;
  }
  //Create note
  async createNote(userId: string, dto: CreateNoteDto) {
    const note = await this.prisma.note.create({
      data: { userId, ...dto },
    });
    return note;
  }
  //Edit note by id
  async editNoteById(userId: string, noteId: string, dto: EditNoteDto) {
    const note = await this.prisma.note.findUnique({ where: { id: noteId } });
    if (!note || note.userId !== userId) {
      throw new ForbiddenException('Access to rescource denied');
    }
    return await this.prisma.note.update({
      where: { id: noteId },
      data: { ...dto },
    });
  }
  //Delete note by id
  async deleteNoteById(userId: string, noteId: string) {
    const note = await this.prisma.note.findUnique({ where: { id: noteId } });
    if (!note || note.userId !== userId) {
      throw new ForbiddenException('Access to rescource denied');
    }
    await this.prisma.note.delete({ where: { id: noteId } });
  }
}
