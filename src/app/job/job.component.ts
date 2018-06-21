import {Component, Input} from "@angular/core";
import {Job} from "./job.model";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'dynamo-job',
  template: `
    <article class="mb-3 bg-light p-3">
      <img alt="" [src]="job.company_logo">
      
      <h3>{{ job.title }}</h3>
      
      <hr>
      
      <h4>Description</h4>

      <div [innerHtml]="job.description"></div>
      
      <p class="text-muted"><b>Location:</b> {{ job.location }}</p>
      
      <a class="btn btn-lg btn-primary" [href]="job.url">View job</a>
    </article>
  `
})
export class JobComponent {
  @Input() public job: Job;

  constructor (
    private domSanitizer: DomSanitizer
  ) {}

  public html (input: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(input)
  }
}
