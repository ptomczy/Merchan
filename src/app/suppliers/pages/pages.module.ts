import { NgModule } from "@angular/core";
import { SupplierPage } from './supplier/supplier';
import { SupplierListPage } from './supplier-list/supplier-list';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SLComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [SupplierPage, SupplierListPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SLComponentsModule
    ],
})
export class PagesModule {

}