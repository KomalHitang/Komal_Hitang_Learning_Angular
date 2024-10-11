import {Component, OnInit} from '@angular/core';
import {carService} from "../Services/car.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {Car} from "../car/car";
import {catchError, map, of, switchMap} from "rxjs";

@Component({
  selector: 'app-modify-student',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-car.component.html',
  styleUrl: './modify-car.component.scss'
})
export class ModifyCarComponent implements OnInit{
  carForm: FormGroup;
  car: Car | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: carService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      name: ['', Validators.required],//First name is required
      year: ['', Validators.required],
      model: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getcarById(+id).subscribe(car => {
        if(car) {
          this.car = car;

          this.carForm.patchValue(car);
        }
      });
    }
  }

  onSubmit(): void {
    const car: Car = this.carForm.value;

    // Check if we're updating an existing car
    if (car.id) {
      this.carService.updatecar(car);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.carService.generateNewId(); // This method will create a new ID
      car.id = newId;
      this.carService.addcar(car);
    }

    this.router.navigate(['/car']);
  }

  onDelete(): void {
    const id = this.carForm.get('id')?.value;
    if (id) {
      this.carService.deletecar(id);
      this.router.navigate(['/car']);
    }
  }

  navigateTocarList(): void {
    this.router.navigate(['/car']);
  }
}
