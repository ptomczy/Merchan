import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';
import * as lastActions from '../actions/last.actions';
import { getValues } from '../reducers/last.selectors';
import { ILastState } from '../models/last.model';

@Component({
    selector: 'last-page',
    templateUrl: 'last.html'
})
export class LastPage {
    private counter: number = 0;

    constructor(private str: Store<ILastState>){}

    private btnUp(){
        this.counter++;
        this.str.dispatch(new lastActions.AddObj({id: this.counter, value: 'dupa dupa ' + this.counter * 10}));
    }

    private btnRead(){
       this.str.pipe(select(getValues)).subscribe(x => console.log(x));
    }
}
