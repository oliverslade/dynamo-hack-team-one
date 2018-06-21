import {Component, OnInit} from "@angular/core";
import {ResourceService} from "./resource.service";
import {Observable} from "rxjs";
import {Resource} from "./resource.model";

@Component({
  selector: 'dynamo-resource',
  template: `
    <article class="mb-3 bg-light p-3" *ngFor="let resource of resources$ | async">
      <img class="img-thumbnail mb-3" alt="" [src]="resource.company_logo" *ngIf="resource.company_logo">
      
      <h3>{{ resource.title }}</h3>
      
      <hr>
      
      <p class="text-muted mb-0"><b>Location:</b> {{ resource.location }}</p>
      <p class="text-muted mb-0"><b>Type:</b> {{ resource.type }}</p>
      <p class="text-muted"><b>Cost:</b> {{ resource.cost }}</p>

      <a class="btn btn-lg btn-primary" [href]="resource.url">View job</a>
    </article>
  `
})
export class ResourceComponent implements OnInit {
  public resources$: Observable<Resource[]>;

  constructor (
    private resourceService: ResourceService
  ) {}

  public ngOnInit (): void {
    this.resources$ = this.resourceService.getResources();
  }
}
