import { NgModule} from '@angular/core' ;
import { PreloadAllModules,Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
