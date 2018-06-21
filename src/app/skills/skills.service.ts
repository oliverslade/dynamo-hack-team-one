import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs/index";
import {Skills} from "./skills.model";
import {HttpClient} from "@angular/common/http";
import {ISkillsDto, SkillsDto} from "./skills.dto";
import {Rating} from "../rating/rating.model";
import {Job} from "../job/job.model";

@Injectable()
export class SkillsService {
  private url: string = 'http://34.245.166.43:3000/jobs';

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

  public postSkills (name: string, ratings: Rating[]): Observable<Job[]> {
    const skills: ISkillsDto = {};

    ratings.forEach((value: Rating): void => {
      skills[value.skill] = {
        interestRating: value.interestRating,
        skillRating: value.skillRating
      };
    });

    const body: SkillsDto = {
      name,
      skills
    };

    return this.httpClient.post<Job[]>(this.url, body);
  }
}
