import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleShowComponent } from './schedule/schedule-show/schedule-show.component';
import { ScheduleEditComponent } from './schedule/schedule-edit/schedule-edit.component';
import { ScheduleItemComponent } from './schedule/schedule-show/schedule-item/schedule-item.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WorkshopShowComponent } from './workshop/workshop-show/workshop-show.component';
import { WorkshopItemComponent } from './workshop/workshop-show/workshop-item/workshop-item.component';
import { SponsorComponent } from './sponsor/sponsor.component';

import { ScheduleService } from './schedule/schedule.service';
import { WorkshopService } from './workshop/workshop.service';
import { SponsorService } from './sponsor/sponsor.service';
import { SponsorItemComponent } from './sponsor/sponsor-item/sponsor-item.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentService } from './main-content/content.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ScheduleComponent,
    ScheduleShowComponent,
    ScheduleEditComponent,
    ScheduleItemComponent,
    WorkshopComponent,
    WorkshopShowComponent,
    WorkshopItemComponent,
    SponsorComponent,
    SponsorItemComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ScheduleService, WorkshopService, SponsorService, ContentService],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent]
})
export class AppModule { }
