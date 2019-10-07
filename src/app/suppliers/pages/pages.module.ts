import { NgModule } from "@angular/core";
import { SupplierListPage } from './supplier-list/supplier-list';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SLComponentsModule } from '../components/components.module';
import { SupplierPage } from './supplier/supplier';

@NgModule({
    declarations: [SupplierListPage, SupplierPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SLComponentsModule
    ],
})
export class PagesModule {

}