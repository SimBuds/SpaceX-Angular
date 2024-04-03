import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' }, // Redirect root path to /missions
  { path: 'missions', component: MissionlistComponent },    // Associate /missions with MissionlistComponent
  { path: 'mission/:flight_number', component: MissiondetailsComponent }, // Detail view with flight_number as parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }