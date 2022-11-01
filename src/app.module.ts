import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { NoteController } from './note/note.controller';
import { NoteModule } from './note/note.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UserModule, NoteModule, AuthModule],
  controllers: [AppController, UserController, NoteController],
  providers: [AppService, UserService, PrismaService, AuthService],
})
export class AppModule {}
