import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
// import { HomeComponent } from './features/home/home';
// import { ThemesComponents } from './features/themes/themes';
// import { RegisterComponent } from './features/auth/register/register';
// import { LoginComponent } from './features/auth/login/login';
// import { ThemeContentComponent } from './features/themes/theme-content/theme-content';
// import { ProfileComponent } from './features/profile/profile';
// import { NotFoundComponent } from './features/not-found/not-found';
// import { NewThemeComponent } from './features/new-theme/new-theme';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //redirect to home

  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
  },

  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register').then((m) => m.RegisterComponent),
  },

  {
    path: 'themes',
    loadComponent: () => import('./features/themes/themes').then((m) => m.ThemesComponents),
  },
  {
    path: 'themes/:themeId',
    loadComponent: () =>
      import('./features/themes/theme-content/theme-content').then((m) => m.ThemeContentComponent),
  },
  {
    path: 'add-theme',
    loadComponent: () => import('./features/new-theme/new-theme').then((m) => m.NewThemeComponent),
    canActivate: [authGuard],
  },

  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
  },

  // { path: 'home', component: HomeComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // { path: 'themes', component: ThemesComponents },
  // { path: 'themes/:themeId', component: ThemeContentComponent, canActivate: [authGuard] },
  // { path: 'add-theme', component: NewThemeComponent, canActivate: [authGuard] },

  // { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  // { path: '**', component: NotFoundComponent },
];
