import {Component, OnInit} from '@angular/core';
import {Rating} from "../rating/rating.model";
import {SkillsService} from "../skills/skills.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {IntroductionComponent} from "../introduction/introduction.component";
import {Job} from "../job/job.model";

@Component({
  selector: 'dynamo-home',
  template: `
    <h1 class="mb-2" *ngIf="name">Hi {{ name }}</h1>
    
    <ng-container [ngSwitch]="jobs.length > 0">
      <ng-template ngSwitchDefault>
        <div *ngIf="name">
          <dynamo-skills (skillsOutput)="addSkills($event)"></dynamo-skills>

          <dynamo-rating [skill]="skill" *ngFor="let skill of skills" (result)="collectRatings($event)"></dynamo-rating>

          <hr>

          <button class="btn btn-lg btn-success" type="button" [disabled]="ratings.length === 0" (click)="submitSkills()">Submit</button>
        </div>
      </ng-template>
      
      <ng-template [ngSwitchCase]="true">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>Current roles matching your skills</h2>
            
            <hr>
            
            <dynamo-job [job]="job" *ngFor="let job of jobs"></dynamo-job>
          </div>

          <div class="col-12 col-md-6">
            <h2>Learn about your interests</h2>
            
            <hr>
            
            <dynamo-resource></dynamo-resource>
          </div>
        </div>
      </ng-template>
    </ng-container>
    
    <dynamo-loading *ngIf="loading"></dynamo-loading>
  `
})
export class HomeComponent implements OnInit {
  public skills: string[];
  public ratings: Rating[] = [];
  public jobs: Job[] = [];
  public loading: boolean = false;
  public name: string = null;

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
    this.loading = true;

    this.skillsService
      .postSkills(this.name, this.ratings)
      .subscribe((jobs: Job[]): void => {
        setTimeout((): void => {
          this.loading = false;
          this.jobs = jobs;
        }, 500);
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
