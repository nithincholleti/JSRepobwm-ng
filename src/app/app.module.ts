import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalModule } from './rental/rental.module';


import { AppComponent } from './app.component';
import {headerComponent2} from './Common/header/header.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [{ path: '', redirectTo:'/rentals', pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    headerComponent2
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
