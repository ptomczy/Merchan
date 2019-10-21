import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';


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
        allNight: false,
        room: ''
    };

    minDate = new Date().toISOString();
    eventSource = [];
    viewTitle: string = 'What a ride!';
    calendar = {
        mode: 'day',
        currentDate: new Date()
    };
    private baseTimeBrick: number;
    private eventLen: number;
    private pickerCols: Array<{}>

    constructor(private modalCtrl: ModalController, private pickerCtrl: PickerController){
        
    }

    ngOnInit(){

        this.baseTimeBrick = 60;
        this.eventLen = 1;

        this.event = {
            startTime: '',
            endTime: '',
            allNight: false,
            room: ''
        }

    }

    async showPicker(){
        let opts: PickerOptions = {
            buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel'
                },
                {
                  text: 'Done'
                }
              ],
              columns: [
                {
                  name: 'date',
                  options: [
                    { text: 'Angular', value: 'A' },
                    { text: 'Vue', value: 'B' },
                    { text: 'React', value: 'C' }
                  ]
                },
                {
                    name: 'startHour',
                    options: [
                      { text: 'Angular', value: 'A' },
                      { text: 'Vue', value: 'B' },
                      { text: 'React', value: 'C' }
                    ]
                  }
              ]
        }

        let picker = await this.pickerCtrl.create(opts);
        picker.present();
        picker.onDidDismiss().then(async data => {
            let date = await picker.getColumn('date');
            let hour = await picker.getColumn('startHour')
            console.log(date.options[date.selectedIndex].text);
            console.log(hour.options[hour.selectedIndex].value);
        })
    }

    dismissMe(){
        this.modalCtrl.dismiss({
            'fromModal': 'Informacja z modala'
        })
    }

    addEvent(){
        console.log(this.event);
    }

    setTime(dir: string){
        if(dir == "inc"){
            this.eventLen++;
        } else {
            if(this.eventLen > 1){
                this.eventLen--;
            }
        }
    }



    
}