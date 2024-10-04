import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {car} from "../car/car";


@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent {
  @Input() car!:car; // Use this to accept car data

}
