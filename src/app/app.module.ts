import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SkillsService} from "./skills/skills.service";
import {SkillsComponent} from "./skills/skills.component";
import {RatingComponent} from "./rating/rating.component";
import {HomeComponent} from "./home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {IntroductionComponent} from "./introduction/introduction.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JobComponent} from "./job/job.component";
import {ResourceService} from "./resource/resource.service";
import {ResourceComponent} from "./resource/resource.component";
import {LoadingComponent} from "./loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    RatingComponent,
    HomeComponent,
    IntroductionComponent,
    JobComponent,
    ResourceComponent,
    LoadingComponent
  ],
  entryComponents: [
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ResourceService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
