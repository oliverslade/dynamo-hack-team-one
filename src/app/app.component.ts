import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <main class="container">
      <dynamo-skills (skillsOutput)="addSkills($event)"></dynamo-skills>
      
      <hr>

      <dynamo-rating [skill]="skill" *ngFor="let skill of skills"></dynamo-rating>

      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  public skills: string[];

  public addSkills (skills: string[]): void {
    this.skills = skills;
  }
}
