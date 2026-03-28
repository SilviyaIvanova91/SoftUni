import { Routes } from '@angular/router';
import { MissionsComponent } from './features/missions/missions';
import { CountdownComponent } from './features/countdown/countdown';
import { LoginComponent } from './features/login/login';
import { NotFoundComponent } from './features/not-found/not-found';
import { MissionDetailsComponent } from './features/mission-details/mission-details';
import { missionResolver } from './guards/mission.resolver';
import { authGuard } from './guards/auth.guard';
import { CommandCenterComponent } from './features/comand-center/comand-center';
import { CrewRegisterComponent } from './features/crew-register/crew-register';
import { MissionFormComponent } from './features/mission-form/mission-form';

export const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionsComponent },
  {
    path: 'missions/:id',
    component: MissionDetailsComponent,
    resolve: { mission: missionResolver },
  },
  { path: 'countdown', component: CountdownComponent },
  { path: 'crew-register', component: CrewRegisterComponent },
  { path: 'new-mission', component: MissionFormComponent },
  {
    path: 'comand-center',
    // component: CommandCenterComponent,
    loadComponent: () =>
      import('./features/comand-center/comand-center').then((m) => m.CommandCenterComponent),
    canActivate: [authGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
