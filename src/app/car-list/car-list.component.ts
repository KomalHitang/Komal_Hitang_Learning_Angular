import {Component, OnInit} from '@angular/core';

// @ts-ignore
import {CurrencyPipe, NgForOf, NgIf, UpperCasePipe} from "@angular/common";

// @ts-ignore
import {RouterLink} from "@angular/router";
// @ts-ignore
import {FullNamePipe} from "../pipes/full-name.pipe";
import {ModifyCarComponent} from "../modify-car/modify-car.component";
import {Car} from "../car/car";
import {carService} from "../Services/car.service";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    ModifyCarComponent,
    RouterLink,
    NgIf,
    CurrencyPipe,
    FullNamePipe,
    UpperCasePipe
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './carlist.component.scss'
})
export class carListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'name', 'year', 'model'];
  mockContent: Car[] = [];
  error: string | null = null; //Var to hold an error message

  constructor (private carService: carService){
    //this constructor is primarily used for dependency injection
  }



  ngOnInit(){
    // This lifecycle hook is a good place to fetch and init our data
    this.carService.getCar().subscribe({
      next: (data: Car[]) => {
        this.mockContent = data;
        this.error = null; // Clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching car'; // Set an error message
        console.error("Error fetching car", err);
      },
      complete: () => console.log("car data fetch complete!")
    });
  }
  selectedcar?: Car;
  selectCar(car: Car): void {
    this.selectedcar = car;
  }



}
