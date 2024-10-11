import {Component, Input, OnInit} from '@angular/core';
import {car} from "../car/car";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {carService} from "../Services/car.service";

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss'
})
export class carDetailComponent implements OnInit{
  //Needs to be | undef because there wont always be a car thats clicked on
  car: car | undefined; //The car to display
  mockContent: car[] = [];// to store the list of car
  currentIndex: number = 0;//to track the current index

  constructor(
    private route: ActivatedRoute,
    private carService: carService,
    private router: Router
  ) {}
//rewrite onInit to get the list of car and the current student
  ngOnInit(): void {
    this.carService.getStudents().subscribe(car => {
      this.mockContent = car;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.mockContent.findIndex(user => car.id === id);
          this.car = this.mockContent[this.currentIndex];
        }
      });
    });
  }

//function to go back to car-list view
  goBack(): void {
    this.router.navigate(['/car']);
  }

  goForward(): void {
    if (this.currentIndex < this.mockContent.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/car', this.mockContent[this.currentIndex].id]);
    }
  }

  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/car', this.mockContent[this.currentIndex].id]);
    }
  }


}
