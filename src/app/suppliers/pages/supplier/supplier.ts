import { Component, Input, OnInit } from "@angular/core";
import { IPerson } from '../../models/suppliers.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalSupplierOrder } from '../../components/modal-supplier-order/modal-supplier-order.component';
import { modalController } from '@ionic/core';

@Component({
    selector: 'supplier',
    templateUrl: 'supplier.html',
    styleUrls: ['supplier.scss']
})
export class SupplierPage implements OnInit{

    private supplierData: any;
    private dataFromModal: any;
    

    constructor(private route: ActivatedRoute, public modalController: ModalController){
    }

    ngOnInit(){
        if(this.route.snapshot.data['bubasResolver']) {
            this.supplierData = this.route.snapshot.data['bubasResolver'];
            console.log(this.supplierData);
        }
    }

    async presentModal(){
        const modal = await this.modalController.create({
            component: ModalSupplierOrder,
            cssClass: 'modal-supplier-order',
            componentProps: {
                'data1': 'Dupa',
                'data2': 'Brudna'
            },
            animated: true
        })
        modal.onDidDismiss().then(data => {
            this.dataFromModal = data;
            console.log("Dane powracające z modala to: ", this.dataFromModal.data.fromModal);
        })

        return await modal.present();
        
    
    }



}