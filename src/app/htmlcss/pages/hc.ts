import { Component, ViewChild } from "@angular/core";
import { IonContent } from '@ionic/angular';

@Component({
    selector: 'hc-page',
    templateUrl: 'hc.html',
    styleUrls: ['hc.scss']
})
export class HcPage {

    @ViewChild(IonContent, {static: false}) content: IonContent;
    
    scrollToPoint(x,y){
        this.content.scrollToPoint(x, y, 1500);
    }

    scrollToBottom(){
        this.content.scrollToBottom(1500);
    }
}