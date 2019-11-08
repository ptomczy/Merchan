import { NgModule } from "@angular/core";
import { OtherRoutingModule } from './other-routing.module';
import { OtherPage } from './pages/other';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/other.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [OtherPage],
    imports: [OtherRoutingModule, CommonModule, IonicModule, FormsModule,
    StoreModule.forFeature('todo', todoReducer)
    ]
})
export class OtherModule {

}