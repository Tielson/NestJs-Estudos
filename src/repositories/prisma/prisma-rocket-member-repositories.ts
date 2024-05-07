import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketTeamMemberRepository } from '../rocket-members-repositories';

@Injectable()
export class PrismaRocketMemberRepository
  implements RocketTeamMemberRepository
{
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberfunctions: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: { id: randomUUID(), name, function: memberfunctions },
    });
  }
}
