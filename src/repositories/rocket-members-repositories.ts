export abstract class RocketTeamMemberRepository {
  abstract create(name: string, memberfunctions: string): Promise<void>;
}
