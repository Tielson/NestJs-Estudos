import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRocketMemberRepository } from './repositories/prisma/prisma-rocket-member-repositories';
import { RocketTeamMemberRepository } from './repositories/rocket-members-repositories';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketTeamMemberRepository,
      useClass: PrismaRocketMemberRepository,
    },
  ],
})
export class AppModule {}
