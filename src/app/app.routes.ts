import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'sobre',
    component: About
  },
  {
    path: 'contato',
    component: Contact
  },
  {
    path: 'projetos',
    component: Projects
  },
  {
    path: '**',
    component: Home
  }
];
