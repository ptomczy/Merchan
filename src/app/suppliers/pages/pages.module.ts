import { NgModule } from "@angular/core";
import { SupplierListPage } from './supplier-list/supplier-list';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SLComponentsModule } from '../components/components.module';
import { SupplierPage } from './supplier/supplier';
import { TranslateSkillPipe } from '../pipes/supplier.pipe';

@NgModule({
    declarations: [SupplierListPage, SupplierPage, TranslateSkillPipe],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SLComponentsModule
    ],
})
export class PagesModule {

}