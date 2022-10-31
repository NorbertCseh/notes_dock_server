import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { NoteController } from './note/note.controller';
import { NoteModule } from './note/note.module';

@Module({
  imports: [UserModule, NoteModule],
  controllers: [AppController, UserController, NoteController],
  providers: [AppService, UserService],
})
export class AppModule {}
