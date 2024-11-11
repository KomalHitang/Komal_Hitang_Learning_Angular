import { Injectable } from '@angular/core';
//import our mock data

import {catchError, Observable,  throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {mockContent} from "../car/mockcar.data";
import {Car} from "../car/car";

//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'api/students'; //url to web api
  private car: Car[] = mockContent;//Local copy of student data for CRUD Operations
  constructor(private http: HttpClient) { }//DI http
  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  getCar(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError)); //return a single student
  }

  addCar(car: Car): Observable<Car> {
    car.id = this.generateNewId();
    return this.http.post<Car>(this.apiUrl, car).pipe(catchError(this.handleError));
  }

  updateCar(car: Car): Observable<Car | undefined> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Car>(url, car).pipe(catchError(this.handleError));
  }

  deleteCar(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.car.length > 0 ? Math.max(...this.car.map(car => car.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
