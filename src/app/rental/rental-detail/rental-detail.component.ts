import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Rental} from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rentalItem: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) {
  }
    ngOnInit() {
        this.route.params.subscribe( (params) => {
        this.getspecificRental(params['rentalId']);
      });
    }

    getspecificRental(rentalId: any) {
      debugger;
      this.rentalService.getRentalByIdCustom1(rentalId).subscribe (
         (rentalItem: Rental) => {
           this.rentalItem = rentalItem;
         });
    }


}
