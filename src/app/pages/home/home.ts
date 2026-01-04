import { Component } from '@angular/core';
import { PageLayout } from "../../components/page-layout/page-layout";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [PageLayout, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
