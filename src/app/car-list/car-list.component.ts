import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Car} from "../car/car";
// @ts-ignore



class car {
}

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    NgForOf,


  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  displayedColumns:string[]= ['type', 'model', 'vinNumber', 'color', 'brand','hasOwner','image'];
    carList: Car[] = [
      {
        type:'toyota',
        model:'camry',
        vinNumber:4545,
        color:'black',
        brand:'Toyota',
        hasOwner: false,
        image:'download.jpg'


    },
      {
        type: 'ford',
        model: 'mustang',
        vinNumber: 2709,
        color:'blue',
        brand:'Ford',
        hasOwner:true,
        image:'mustang.jpg'

      },
      {
        type:'tesla',
        model:'model X',
        vinNumber:6757,
        color:'black',
        brand:'Tesla',
        hasOwner:false,
        image:'tesla.jpg'

      },
      {
        type:'honda',
        model:'civic',
        vinNumber: 5614,
        color:'black',
        brand:'Honda',
        hasOwner:true,
        image:'civic.jpg'

      }];
  //Catch the onclick event from the html
  selectedcar?: car;
  //function to set which car to display
  @Input() Car!: any;
  choosedcar: any;
  selectcar(choosedcar:car): void {
    this.selectedcar = choosedcar;
  }

 }

