import { Component, Input } from "@angular/core";
import { IPerson } from '../../models/suppliers.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sl-component',
    templateUrl: 'sl.component.html'
})
export class SLComponent {

    @Input() arrayOfItems: Array<IPerson>;
    private arrayItem: IPerson;

    constructor(private dataService: DataService, private router: Router){
    }


    showPageOf(el: IPerson) {
        let tmpIdx: number = this.arrayOfItems.findIndex(elem => elem == el);
        console.log('Kliknięte z poziomu komponentu. Znalezione to: ', this.arrayOfItems[tmpIdx].name);
        this.dataService.setData(this.arrayOfItems);
        this.router.navigateByUrl('suppliers/' + tmpIdx);
        
    }
}