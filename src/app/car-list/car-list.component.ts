import {Component, OnInit} from '@angular/core';
import { car } from '../car/car';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {carService} from "../service/car.service";
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
export class CarListComponent implements OnInit{
  chosenContent = 'car';
  mockContent: car[] = [];


constructor (private carService: carService){
  //this constructor is primarily used for dependency injection
}


ngOnInit() {
  //This lifecycle hook is a good place to fetch and init our data
  this.carService.getCar().subscribe({
    next: (data: car[]) => this.mockContent = data,
    error: err => console.error("Error fetching Students", err),
    complete: () => console.log("Student data fetch complete!")
  })
}
}



