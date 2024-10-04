import { Injectable } from '@angular/core';
//import our mock data
import { Observable, of } from 'rxjs';
import {mockContent} from "../car/mockCar.data";
import {car} from "../car/car";


//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private cars: car[] = mockContent;
  constructor() { }

  getCar(): Observable<car[]>{
    return of(mockContent);
  }

  addCar(newCar:car) : Observable<car[]>{
    this.cars.push(newCar)
    return of(this.cars);
  }

  //Update an Existing user
  updateCar(updatedCar: car): Observable<car[]> {
    const index = this.cars.findIndex(user => user.id === updatedCar.id);
    if (index !== -1) {
      this.cars[index] = updatedCar;
    }
    return of(this.cars);
  }

  deleteCar(studentId: number): Observable<car[]> {
    this.cars = this.cars.filter(user => user.id !== studentId);
    return of(this.cars);
  }
  getCarById(carId: number): Observable<car | undefined> {
    const student = this.cars.find(user => user.id === carId);
    return of(student);
  }
}
