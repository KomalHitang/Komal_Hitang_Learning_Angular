import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { User} from "../Shared/Models/user";
import {NgForOf} from "@angular/common";
// @ts-ignore
import {carDetailComponent} from "../car-detail/car-detail.component";
// @ts-ignore
import {carService} from "../Services/car.service";
import {RouterLink} from "@angular/router";
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
export class StudentListComponent implements OnInit {
  //Placeholder values for the table
  chosenContent:string[]= ['id', 'name', 'year', 'model'];
  mockContent: User[] = [];

  constructor (private carService: carService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.carService.getStudents().subscribe({
      next: (data: User[]) => this.mockContent = data,
      error: (err: any) => console.error("Error fetching car", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }
  selectedcar?: User;
  selectcar(car: User): void {
    this.selectedcar = car;
  }

}

export class carListComponent {
}
