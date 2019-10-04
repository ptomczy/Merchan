import { Component, Input } from "@angular/core";
import { IPerson } from '../../models/suppliers.model';

@Component({
    selector: 'sl-component',
    templateUrl: 'sl.component.html'
})
export class SLComponent {

    @Input() arrayOfItems: Array<IPerson>;
    private arrayItem: IPerson;


    showPageOf(el: IPerson) {
        let tmpIdx: number = this.arrayOfItems.findIndex(elem => elem == el);
        console.log('Kliknięte z poziomu komponentu. Znalezione to: ', this.arrayOfItems[tmpIdx].name);
    }
}