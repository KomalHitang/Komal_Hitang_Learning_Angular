import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import{NgIf} from "@angular/common";
import {Car} from "./car/car";

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
  car1: Car = {model: 'BMW X3', color: 'red', type: 'X3', brand: 'bmw', vinNumber: 8763523586, hasOwner: true};
  car2: Car = {model: 'Ford 56', color: 'black', type: '56 Forda', brand: 'Ford', vinNumber: 7863786, hasOwner: false};
  car3: Car = {model: 'Toyota P3', color: 'yellow', type: 'X3', brand: 'Toyota', vinNumber: 478568745, hasOwner: true};
  car4: Car = {model: 'BMW Z3', color: 'pink', type: 'Z3', brand: 'bmw', vinNumber: 9856826589, hasOwner: false};
  car5: Car = {model: 'Hyundai MAX8', color: 'red', type: '', brand: 'hyundai', vinNumber: 786572365, hasOwner: true};
  car6: Car = {model: 'BMW Y3', color: 'red', type: 'Y3', brand: 'bmw', vinNumber: 8758628596, hasOwner: false};

  carlist: Car[] = [this.car1, this.car2, this.car3, this.car4, this.car5, this.car6]

  //Function that gets called from our onclick. Takes in an
  //arguement ofa variable called user, which is type User and returns void
  toggleAdminStatus(car: Car): void {
    car.hasOwner = !car.hasOwner;
  }
}
