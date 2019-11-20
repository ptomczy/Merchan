import { Component } from "@angular/core";

@Component({
    selector: 'le-page',
    templateUrl: 'le.html'
})
export class LePage{
    private inputValue: string;

    btnClick(){
        console.log('Wartość inputa to: ', this.inputValue);
    }
    

}