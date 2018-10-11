import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Rental} from './rental.model';




@Injectable()
export class RentalService {
private rentalList: Rental[] = [{
    id: 1,
    title: 'Central Apartment',
    city: 'New York',
    street: 'Times Sqaure',
    category: 'apartment',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 3,
    description: 'Very nice apartment',
    dailyRate: 34,
    shared: false,
    createdAt: '24/12/2017'
  },
  {
    id: 2,
    title: 'Central Apartment 2',
    city: 'San Francisco',
    street: 'Main street',
    category: 'condo',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 2,
    description: 'Very nice apartment',
    dailyRate: 12,
    shared: true,
    createdAt: '24/12/2017'
  },
  {
    id: 3,
    title: 'Central Apartment 3',
    city: 'Bratislava',
    street: 'Hlavna',
    category: 'condo',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 2,
    description: 'Very nice apartment',
    dailyRate: 334,
    shared: true,
    createdAt: '24/12/2017'
  },
  {
    id: 4,
    title: 'Central Apartment 4',
    city: 'Berlin',
    street: 'Haupt strasse',
    category: 'house',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 9,
    description: 'Very nice apartment',
    dailyRate: 33,
    shared: true,
    createdAt: '24/12/2017'
}];

public rentalitemfound: any =  function(rentalList: Rental, rentalId: number) {
  for (let i = 0; i < this.rentalList.length; i++) {
    if (this.rentalList[i].id === this.rentalId) {
        return this.rentalList[i];
    }
  }
};

public getRentalById(rentalId: any): Observable<Rental> {
  return new Observable<Rental>((observer) => {
    setTimeout(() => {
             const foundRentalItem = this.rentalList.find((rental) => {
               return rental.id = rentalId;
             });
             observer.next(foundRentalItem);
          }, 1000 );
         });
 }

  public getRentalByIdCustom(rentalId: any): Observable<Rental> {
    debugger;
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const rentalitemfound: Rental = function (rentalListNew: Rental[], id: number) {
          for (let i = 0; i < rentalListNew.length; i++) {
            console.log('from inside' + rentalListNew[i].id );
            if (rentalListNew[i].id == id) {
              console.log('item found');
              return rentalListNew[i];
            }
          }
        }(this.rentalList, rentalId);
        observer.next(rentalitemfound);
      }, 500);
    });
  }

  public getRentalByIdCustom1(rentalId: any): Observable<Rental> {
    debugger;
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const rentalitemfound = (): Rental => {
          for (let i = 0; i < this.rentalList.length; i++) {
            console.log('from inside' + this.rentalList[i].id );
            if (this.rentalList[i].id == rentalId) {
              console.log('item found');
              return this.rentalList[i];
            }
          }
        };
        observer.next(rentalitemfound());
      }, 500);
    });
  }


public getRentals(): Observable<Rental[]> {
    const  rentalObservable: Observable<Rental[]> = new Observable((observer) => {
           setTimeout(() => {
                     observer.next(this.rentalList);
                 }, 1000);
           setTimeout(() => {
                     observer.error('Error Occurred');
                 }, 2000);
           setTimeout(() => {
                     observer.complete();
                 }, 3000);
        });
    return rentalObservable ;
  }
}
