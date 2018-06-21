import {Component} from '@angular/core';

@Component({
  selector: 'dynamo-home',
  template: `
    <h1>Home</h1>
    
    <dynamo-skills (skillsOutput)="addSkills($event)"></dynamo-skills>

    <hr>

    <dynamo-rating [skill]="skill" *ngFor="let skill of skills"></dynamo-rating>
  `
})
export class HomeComponent {
  public skills: string[];

  public addSkills (skills: string[]): void {
    this.skills = skills;
  }
}
