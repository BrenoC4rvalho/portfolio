import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoInstagram, ionLogoGithub, ionLogoWhatsapp, ionLogoLinkedin } from '@ng-icons/ionicons';

@Component({
  selector: 'app-footer',
  imports: [ NgIcon ],
  viewProviders: [provideIcons({ ionLogoInstagram, ionLogoGithub, ionLogoWhatsapp, ionLogoLinkedin })],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentYear = new Date().getFullYear();

}
