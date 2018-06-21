import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SkillsService} from "./skills/skills.service";
import {SkillsComponent} from "./skills/skills.component";
import {FormsModule} from "@angular/forms";
import {RatingComponent} from "./rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
