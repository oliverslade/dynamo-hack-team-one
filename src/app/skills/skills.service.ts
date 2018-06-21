import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs/index";
import {Skills} from "./skills.model";

@Injectable()
export class SkillsService {
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
}
