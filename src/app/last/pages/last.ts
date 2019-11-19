import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';
import * as lastActions from '../actions/last.actions';
import { IState } from '../models/last.model';
import { getValueSelector } from '../reducers/last.selectors';

@Component({
    selector: 'last-page',
    templateUrl: 'last.html'
})
export class LastPage {
    private counter: number = 0;

    constructor(private str: Store<IState>){}

    private btnUp(){
        this.counter++;
        this.str.dispatch(new lastActions.AddObj({id: this.counter, value: 'dupa dupa ' + this.counter * 10}));
    }

    private btnRead(){
       this.str.pipe(select(getValueSelector)).subscribe(res => console.log(res));
    }
}
