import { Component, Output, EventEmitter } from '@angular/core';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output() toggleSidebar = new EventEmitter<void>();

}
