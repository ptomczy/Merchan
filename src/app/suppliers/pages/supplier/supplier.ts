import { Component, Input, OnInit } from "@angular/core";
import { IPerson } from '../../models/suppliers.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'supplier',
    templateUrl: 'supplier.html',
    styleUrls: ['supplier.scss']
})
export class SupplierPage implements OnInit{

    private supplierData: any;

    constructor(private route: ActivatedRoute){
    }

    ngOnInit(){
        if(this.route.snapshot.data['bubasResolver']) {
            this.supplierData = this.route.snapshot.data['bubasResolver'];
            console.log(this.supplierData);
        }
    }

}