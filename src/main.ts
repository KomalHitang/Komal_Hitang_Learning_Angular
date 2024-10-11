import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {carDetailComponent} from "./app/car-list-item/car-list-item.component";
import {carListComponent} from "./app/car-list/car-list.component";
import {ModifyCarComponent} from "./app/modify-car/modify-car.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/car', pathMatch: 'full'}, //default route
  { path: 'car', component: carListComponent },
  { path: 'car/:id', component: carDetailComponent },
  {path:'modify-student', component: ModifyCarComponent},
  {path: '**', component:PageNotFoundComponent}//Wildcard route for a 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
