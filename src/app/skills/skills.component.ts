import {Component, EventEmitter, Output} from "@angular/core";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {SkillsService} from "./skills.service";
import {Skills} from "./skills.model";
import {NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'dynamo-skills',
  template: `
    <div class="form-group mb-5">
      <label for="skill-search">Search</label>
      <input id="skill-search" class="form-control" type="text" [ngbTypeahead]="search" (selectItem)="selectItem($event)">
    </div>
  `
})
export class SkillsComponent {
  @Output() public skillsOutput: EventEmitter<string[]> = new EventEmitter<string[]>();
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
  private skills: string[] = [];

  constructor (
    private skillsService: SkillsService
  ) {}

  public selectItem ({item}: NgbTypeaheadSelectItemEvent): void {
    this.skills.unshift(item);

    this.skillsOutput.emit(this.skills);
  }
}
