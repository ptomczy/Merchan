import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { IMeeting, IPerson } from '../../models/suppliers.model';
import { START_EXPEDITION_SUCCESS } from '../../actions/suppliers.actions';
import * as fromReducer from '../../reducers/supplier.reducer';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
    selector: 'supplier-list',
    templateUrl: 'supplier-list.html'
})
export class SupplierListPage implements OnInit {

    private info: any;
    private listOfSuppliers: Array<IPerson>;

    constructor(private store: Store<Array<IMeeting>>, private supplyServ: SuppliersService){

        //this.store.pipe(select(fromReducer.getMeetingIds)).subscribe(value=> console.log(value));
        //this.store.pipe(select(fromReducer.getMeetingEntities)).subscribe(va => console.log(va));
        //this.store.pipe(select(fromReducer.getMeetingAll)).subscribe(va => console.log(va));
        //this.store.pipe(select(fromReducer.getMeetingTotal)).subscribe(va => console.log(va));
    }

    ngOnInit(){
        this.listOfSuppliers = this.supplyServ.getSuppliers();
    }
    buttonClicked(){
        this.store.dispatch(START_EXPEDITION_SUCCESS(
            {mtng: {
                id: 4, 
                room: {id: 2, name: 'Devil\'s church'}, 
                person: {name: 'Tina', age: 29, height: 167, tits: '70B', skills: [1, 2, 3, 5], photo: '/assets/Tina.jpeg'}, 
                startTime: 'godzina in', 
                endTime: 'godzina out'
            }}));

        this.store.dispatch(START_EXPEDITION_SUCCESS(
            {mtng: {
                id: 6, 
                room: {id: 1, name: 'Romantic Island'}, 
                person: {name: 'Venus', age: 26, height: 176, tits: '75D', skills: [1, 2, 4], photo: '/assets/Venus.jpeg' }, 
                startTime: 'godzina in', 
                endTime: 'godzina out'
            }}));

        this.store.pipe(select(fromReducer.getMeetingEntities)).subscribe(va => {

            this.info = va[6].person.name;
            console.log(this.info);
        });

        this.store.pipe(select(fromReducer.getMeetingTotal)).subscribe(mm => {
            this.info = mm;
            console.log('mm: ', this.info);
        })

        this.store.pipe(select(fromReducer.getMeetingAll)).subscribe(mm => {
            this.info = mm[1];
            console.log('mm all: ', this.info);
        })

        let sth = this.supplyServ.getSuppliers();
        console.log(sth);

    }
}