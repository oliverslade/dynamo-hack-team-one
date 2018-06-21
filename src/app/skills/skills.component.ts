import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {SkillsService} from "./skills.service";
import {Skills} from "./skills.model";

@Component({
  selector: 'dynamo-skills',
  template: `
    <div class="form-group">
      <label for="skill-search">Search</label>
      <input id="skill-search" class="form-control" type="text" [ngbTypeahead]="search">
    </div>
  `
})
export class SkillsComponent {
  constructor (
    private skillsService: SkillsService
  ) {}

  public search: Function  = (text$: Observable<string>): Observable<string[]> => text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.skillsService
      .listSkills()
      .pipe(
        map(
          ({skills}: Skills) => skills
            .filter((value: string) => value.toLowerCase().indexOf(term.toLowerCase()) > -1)
            .slice(0, 10)
        )
      ))
  );
}
