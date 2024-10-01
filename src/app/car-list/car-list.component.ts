import { Component } from '@angular/core';
import { Car } from '../car/car';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgForOf
  ],
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  chosenContent = 'car';
  carList: Car[] = [
    {
      type: 'toyota',
      model: 'camry',
      vinNumber: 4545,
      color: 'black',
      brand: 'Toyota',
      hasOwner: false,
      image: 'download.jpg'
    },
    {
      type: 'ford',
      model: 'mustang',
      vinNumber: 2709,
      color: 'blue',
      brand: 'Ford',
      hasOwner: true,
      image: 'mustang.jpg'
    },
    {
      type: 'tesla',
      model: 'model X',
      vinNumber: 6757,
      color: 'black',
      brand: 'Tesla',
      hasOwner: false,
      image: 'tesla.jpg'
    },
    {
      type: 'honda',
      model: 'civic',
      vinNumber: 5614,
      color: 'black',
      brand: 'Honda',
      hasOwner: true,
      image: 'civic.jpg'
    }
  ];
}

