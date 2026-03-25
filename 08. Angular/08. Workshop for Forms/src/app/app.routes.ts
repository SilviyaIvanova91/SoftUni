import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ThemesComponents } from './features/themes/themes';
import { RegisterComponent } from './features/auth/register/register';
import { LoginComponent } from './features/auth/login/login';
import { ThemeContentComponent } from './features/themes/theme-content/theme-content';
import { authGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './features/profile/profile';
import { NotFoundComponent } from './features/not-found/not-found';
import { NewThemeComponent } from './features/new-theme/new-theme';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect to home

  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'themes', component: ThemesComponents },
  { path: 'themes/:themeId', component: ThemeContentComponent, canActivate: [authGuard] },
  { path: 'add-theme', component: NewThemeComponent, canActivate: [authGuard] },

  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];
