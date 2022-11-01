import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { NoteController } from './note/note.controller';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, NoteModule, AuthModule],
  controllers: [UserController, NoteController],
  providers: [UserService, JwtService],
})
export class AppModule {}
