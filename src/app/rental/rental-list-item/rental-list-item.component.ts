import { Component, OnInit,Input } from '@angular/core';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {
	@Input() currRental:Rental;	
  constructor() { }

  ngOnInit() {
  }

}
