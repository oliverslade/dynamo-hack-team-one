import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs/index";
import {Skills} from "./skills.model";
import {HttpClient} from "@angular/common/http";
import {ISkillsDto, SkillsDto} from "./skills.dto";
import {Rating} from "../rating/rating.model";

@Injectable()
export class SkillsService {
  constructor (
    private httpClient: HttpClient
  ) {}

  public listSkills (): Observable<Skills> {
    return of({
      skills: [
        'Java',
        'JavaScript',
        'PHP',
        'Python',
        'C#',
        'Scala',
        'HTML',
        'CSS',
        'Angular',
        'React',
        'MongoDB',
        'SQL',
        'JQuery'
      ]
    });
  }

  public postSkills (name: string, ratings: Rating[]) {
    const skills: ISkillsDto = {};

    ratings.forEach((value: Rating): void => {
      const dto: ISkillsDto = {};

      skills[value.skill] = {
        interestRating: value.interestRating,
        skillRating: value.skillRating
      };
    });

    const body: SkillsDto = {
      name,
      skills
    };

    console.log(body);
  }
}
