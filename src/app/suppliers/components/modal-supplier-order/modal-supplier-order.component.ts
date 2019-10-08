import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-supplier-order',
    templateUrl: 'modal-supplier-order.component.html',
    styleUrls: ['modal-supplier-order.component.scss']
})
export class ModalSupplierOrder implements OnInit{

    @Input() data1: any;
    @Input() data2: any;

    event = {
        startTime: '',
        endTime: '',
        allDay: false,
        allNight: false,
        room: ''
    };

    minDate = new Date().toISOString();
    eventSource = [];
    viewTitle: string = 'What a ride!';
    calendar = {
        mode: 'day',
        currentDate: new Date()
    }

    constructor(private modalCtrl: ModalController){
        
    }

    ngOnInit(){
        this.event = {
            startTime: '',
            endTime: '',
            allDay: false,
            allNight: false,
            room: ''
        }
    }

    dismissMe(){
        this.modalCtrl.dismiss({
            'fromModal': 'Informacja z modala'
        })
    }



    
}