import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {state: 'home'} },
  { path: 'about', component: AboutComponent, data: {state: 'about'} },
  { path: 'schedule', component: ScheduleComponent, data: {state: 'schedule'} },
  { path: 'workshop', component: WorkshopComponent, data: {state: 'workshop'} },
  { path: 'sponsor', component: SponsorComponent, data: {state: 'sponsor'} },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
