import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async editUser(userId: string, dto: EditUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user || user.id !== userId) {
      throw new ForbiddenException('Access to resouce denied');
    }
    let updatedPassword: string;
    if (dto.password) {
      updatedPassword = await argon.hash(dto.password);
    }

    let updatedUser: User;
    try {
      updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: { email: dto.email, password: updatedPassword },
      });
    } catch (error) {
      if (error)
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Email was already taken');
          }
        }
      throw error;
    }
    delete updatedUser.password;
    return updatedUser;
  }
}
