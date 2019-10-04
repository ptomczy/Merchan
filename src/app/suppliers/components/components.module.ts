import { NgModule } from "@angular/core";
import { SLComponent } from './supplier-list-item/sl.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [SLComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule],
    exports: [SLComponent]
})
export class SLComponentsModule {

}