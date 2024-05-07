import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMember {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;
  @IsNotEmpty()
  function: string;
}
