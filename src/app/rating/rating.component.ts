import {Component, Input} from "@angular/core";

@Component({
  selector: 'dynamo-rating',
  template: `
    <section class="mb-2">
      <h2>{{ skill }}</h2>
      
      <article class="mb-1">
        <h3 class="h5">Skill</h3>
        
        <ngb-rating max="5" [(rate)]="skillRating"></ngb-rating>
      </article>

      <article class="mb-1">
        <h3 class="h5">Interest</h3>

        <ngb-rating max="5" [(rate)]="interestRating"></ngb-rating>
      </article>
    </section>
    
    <hr>
  `
})
export class RatingComponent {
  @Input() public skill: string;
  public skillRating: number = 0;
  public interestRating: number = 0;
}
