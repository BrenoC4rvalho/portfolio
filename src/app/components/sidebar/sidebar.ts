import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCommandLine, heroEnvelope, heroFolder, heroUser }  from '@ng-icons/heroicons/outline';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, NgIcon, RouterLink, RouterLinkActive, Logo],
  viewProviders: [provideIcons({ heroFolder, heroEnvelope, heroCommandLine, heroUser })],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  menuItems = [
    { label: 'Home',      link: '/',          icon: 'heroCommandLine', exact: true },
    { label: 'Projetos',  link: '/projetos',  icon: 'heroFolder',      exact: false },
    { label: 'Sobre Mim', link: '/sobre',     icon: 'heroUser',        exact: false },
    { label: 'Contato',   link: '/contato',   icon: 'heroEnvelope',    exact: false },
  ];

}
