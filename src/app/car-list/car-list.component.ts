import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {carService} from "../Services/car.service";
import {RouterLink} from "@angular/router";
import {Car} from "../car/car";
import {carDetailComponent} from "../car-list-item/car-list-item.component";
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    NgForOf,
    carDetailComponent,
    RouterLink
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit {
  //Placeholder values for the table
  chosenContent:string[]= ['id', 'color', 'year', 'model'];
  mockContent: Car[] = [];

  constructor (private carService: carService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.carService.getcar().subscribe({
      next: (data: Car[]) => this.mockContent = data,
      error: (err: any) => console.error("Error fetching car", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }
  selectedcar?: Car;
  selectcar(car: Car): void {
    this.selectedcar = car;
  }

}


