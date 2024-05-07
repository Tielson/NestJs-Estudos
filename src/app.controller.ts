import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMember } from './dtos/create-team-members';
import { RocketTeamMemberRepository } from './repositories/rocket-members-repositories';

@Controller()
export class AppController {
  constructor(private rocketRepositories: RocketTeamMemberRepository) {}

  @Post()
  async getHello(@Body() body: CreateTeamMember) {
    const { name, function: memberfunctions } = body;

    await this.rocketRepositories.create(name, memberfunctions);
  }
}
