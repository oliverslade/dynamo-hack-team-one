export interface ISkillsDto {
  [name: string]: {
    interestRating: number;
    skillRating: number;
  }
}

export class SkillsDto {
  public name: string;
  public skills: ISkillsDto;
}
