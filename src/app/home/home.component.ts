import {Component} from '@angular/core';
import {Rating} from "../rating/rating.model";
import {SkillsService} from "../skills/skills.service";

@Component({
  selector: 'dynamo-home',
  template: `
    <h1>Home</h1>
    
    <dynamo-skills (skillsOutput)="addSkills($event)"></dynamo-skills>

    <dynamo-rating [skill]="skill" *ngFor="let skill of skills" (result)="collectRatings($event)"></dynamo-rating>
    
    <hr>
    
    <button class="btn btn-lg btn-success" type="button" [disabled]="ratings.length === 0" (click)="submitSkills()">Submit skills</button>
  `
})
export class HomeComponent {
  public skills: string[];
  public ratings: Rating[] = [];

  constructor (
    private skillsService: SkillsService
  ) {}

  public addSkills (skills: string[]): void {
    this.skills = skills;
  }

  public collectRatings (rating: Rating): void {
    this.ratings.push(rating);
  }

  public submitSkills (): void {
    // TODO: Subscribe
    this.skillsService.postSkills('Mo', this.ratings);
  }
}
