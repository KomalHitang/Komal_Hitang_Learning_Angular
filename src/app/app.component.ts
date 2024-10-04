import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import{NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';


}
