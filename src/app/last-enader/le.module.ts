import { NgModule } from "@angular/core";
import { LePage } from './pages/le';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LeRoutingModule } from './le-routing.module';

@NgModule({
    declarations: [LePage],
    imports: [CommonModule, IonicModule, FormsModule, LeRoutingModule]
})
export class LeModule {

}