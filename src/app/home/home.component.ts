import {Component, OnInit} from '@angular/core';
import {Rating} from "../rating/rating.model";
import {SkillsService} from "../skills/skills.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {IntroductionComponent} from "../introduction/introduction.component";
import {Job} from "../job/job.model";

@Component({
  selector: 'dynamo-home',
  template: `
    <h1>Home</h1>
    
    <ng-container [ngSwitch]="jobs.length > 0">
      <ng-template ngSwitchDefault>
        <dynamo-skills (skillsOutput)="addSkills($event)"></dynamo-skills>

        <dynamo-rating [skill]="skill" *ngFor="let skill of skills" (result)="collectRatings($event)"></dynamo-rating>

        <hr>

        <button class="btn btn-lg btn-success" type="button" [disabled]="ratings.length === 0" (click)="submitSkills()">Submit skills</button>
      </ng-template>
      
      <ng-template [ngSwitchCase]="true">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>Jobs</h2>
            
            <dynamo-job [job]="job" *ngFor="let job of jobs"></dynamo-job>
          </div>
        </div>
      </ng-template>
    </ng-container>
  `
})
export class HomeComponent implements OnInit {
  public skills: string[];
  public ratings: Rating[] = [];
  public jobs: Job[] = [];
  private name: string = null;

  constructor (
    private ngbModal: NgbModal,
    private skillsService: SkillsService
  ) {}

  public ngOnInit (): void {
    setTimeout((): void => {
      this.handleModal();
    }, 100);
  }

  public addSkills (skills: string[]): void {
    this.skills = skills;
  }

  public collectRatings (rating: Rating): void {
    this.ratings.push(rating);
  }

  public submitSkills (): void {
    this.skillsService
      .postSkills(this.name, this.ratings)
      .subscribe((jobs: Job[]): void => {
        this.jobs = jobs;
      });
  }

  private handleModal (): void {
    const modalRef: NgbModalRef = this.ngbModal.open(IntroductionComponent, {
      beforeDismiss (): boolean {
        return false
      }
    });

    modalRef.componentInstance.output.subscribe((name: string): void => {
      this.name = name;
    });
  }
}