import { Component } from '@angular/core';
import { Car } from '../car/car';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  standalone: true,
  styleUrls: ['./content-list.component.css']
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
      image: 'assets/images/download.jpg'
    },
    {
      type: 'ford',
      model: 'mustang',
      vinNumber: 2709,
      color: 'blue',
      brand: 'Ford',
      hasOwner: true,
      image: 'assets/images/mustang.jpg'
    },
    {
      type: 'tesla',
      model: 'model X',
      vinNumber: 6757,
      color: 'black',
      brand: 'Tesla',
      hasOwner: false,
      image: 'assets/images/tesla.jpg'
    },
    {
      type: 'honda',
      model: 'civic',
      vinNumber: 5614,
      color: 'black',
      brand: 'Honda',
      hasOwner: true,
      image: 'assets/images/civic.jpg'
    }
  ];
}

