import { NgModule } from "@angular/core";
import { HcPage } from './pages/hc';
import { HcRoutingModule } from './hc-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HcPage],
    imports: [HcRoutingModule, IonicModule, CommonModule]
    
})
export class HcModule {

}