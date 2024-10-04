import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import{NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";
import {CarListItemComponent} from "./car-list-item/car-list-item.component";
import {carService} from "./service/car.service";
import {car} from "./car/car";

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent, CarListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'untitled';
  car : car | undefined;
  constructor (private carService: carService){
    //this constructor is primarily used for dependency injection
  }
  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.carService.getCarById(1).subscribe({
      next: (data: car | undefined) => this.car  = data,
      error: err => console.error("Error fetching Students", err),
      complete: () => console.log("Student data fetch complete!")
    })
  }


}
