// @ts-ignore
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Car} from "../car/car";



export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{mockContent: Car[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    // @ts-ignore
    // @ts-ignore
    mockContent = [
      {id: 1, name: 'Toyota Corolla', year: 2020, model: 'Sedan'},
      {id: 2, name: 'Ford Mustang', year: 2021, model: 'Coupe'},
      {id: 3, name: 'Tesla Model 3', year: 2022, model: 'Sedan'},

    ];
    return { mockContent };
  }
}
