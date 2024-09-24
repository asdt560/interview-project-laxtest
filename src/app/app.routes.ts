import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AgencyDetailsComponent } from './pages/agency-details/agency-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'FOIA Agencies Table'
  },
  {
    path: 'agency/:agency_id',
    component: AgencyDetailsComponent,
    title: 'Details'
  }
];
