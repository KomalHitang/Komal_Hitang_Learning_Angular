//mockStudent.data.ts
//import the interface
// @ts-ignore
import {Car} from './car/car';

//Create a mock data array of type User and export so it is
//available to other files

export const mockContent: Car[] = [
  { id: 1, name: 'Toyota Corolla', year: 2020, model: 'Sedan' },
  { id: 2, name: 'Ford Mustang', year: 2021, model: 'Coupe' },
  { id: 3, name: 'Tesla Model 3', year: 2022, model: 'Sedan' },
  // Add more car entries as needed
];
