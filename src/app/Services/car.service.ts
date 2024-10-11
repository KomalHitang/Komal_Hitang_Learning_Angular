import { Injectable } from '@angular/core';
//import our mock data
import {mockContent} from "../car/mockcar.data";
import { Observable, of } from 'rxjs';
import {Car} from "../car/car";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class carService {
  private car: Car[] = mockContent;//Local copy of student data for CRUD Operations
  constructor() { }
  //Returns all students

  getcar(): Observable< Car[]> {
    return of(this.car);
  }

  getcarById(id: number): Observable<Car | undefined> {
    return of(this.car.find(car => car.id === id));
  }

  addcar(car: Car): Observable<Car> {
    this.car.push(car);
    return of(car);
  }

  updatecar(updatedcar: Car): Observable<Car | undefined> {
    const index = this.car.findIndex(car => car.id === updatedcar.id);
    if (index > -1) {
      this.car[index] = updatedcar;
      return of(updatedcar);
    }
    return of(undefined);
  }

  deletecar(id: number): void {
    this.car = this.car.filter(car => car.id !== id);
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.car.length > 0 ? Math.max(...this.car.map(car => car.id)) + 1 : 1;
  }
}
