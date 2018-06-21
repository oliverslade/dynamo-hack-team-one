import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Rating} from "./rating.model";

@Component({
  selector: 'dynamo-rating',
  styles: [
    `
      .complete {
        background: #28a745 !important;
        color: #fff;
        opacity: .5;
      }
      
      .complete .btn {
        display: none;
      }
    `
  ],
  template: `
    <section class="mb-3 bg-light p-3" [ngClass]="{
      complete: disable
    }">      
      <h2>{{ skill }}</h2>

      <hr>
      
      <article class="mb-1">
        <h3 class="h5">Skill</h3>
        
        <ngb-rating max="5" [(rate)]="skillRating"></ngb-rating>
      </article>

      <article class="mb-1">
        <h3 class="h5">Interest</h3>

        <ngb-rating max="5" [(rate)]="interestRating"></ngb-rating>
      </article>

      <button class="btn btn-primary" type="button" [disabled]="disable" (click)="update()">Add skill</button>
    </section>
  `
})
export class RatingComponent {
  @Input() public skill: string;
  @Output() public result: EventEmitter<Rating> = new EventEmitter<Rating>();
  public skillRating: number = 0;
  public interestRating: number = 0;
  public disable: boolean = false;

  public update (): void {
    if (this.skillRating !== 0 && this.interestRating !== 0) {
      this.disable = true;

      this.result.emit({
        skill: this.skill,
        interestRating: this.interestRating,
        skillRating: this.skillRating
      });
    } else {
      alert(`Please input a skill and interest rating for ${this.skill}`);
    }
  }
}
