import {Component, Input} from "@angular/core";
import {Job} from "./job.model";

@Component({
  selector: 'dynamo-job',
  template: `
    <article class="mb-3 bg-light p-3">
      <img alt="" [src]="job.company_logo">
      
      <h3>{{ job.title }}</h3>
      
      <hr>
      
      <p>{{ job.description }}</p>
      
      <p class="text-muted"><b>Location:</b> {{ job.location }}</p>
      
      <a class="btn btn-lg btn-primary" [href]="job.url">View job</a>
    </article>
  `
})
export class JobComponent {
  @Input() public job: Job;
}
