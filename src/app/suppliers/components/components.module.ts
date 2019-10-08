import { NgModule } from "@angular/core";
import { SLComponent } from './supplier-list-item/sl.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalSupplierOrder } from './modal-supplier-order/modal-supplier-order.component';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
    declarations: [SLComponent, ModalSupplierOrder],
    imports: [
        NgCalendarModule,
        CommonModule,
        FormsModule,
        IonicModule],
    exports: [SLComponent],
    entryComponents: [ModalSupplierOrder]
})
export class SLComponentsModule {

}