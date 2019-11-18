import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LastPage } from './pages/last';
import { IonicModule } from '@ionic/angular';
import { LastRoutingModule } from './last-routing.module';
import { StoreModule } from '@ngrx/store';
import { lastReducer } from './reducers/last.reducer';

@NgModule({
    declarations: [LastPage],
    imports: [CommonModule, IonicModule,
        LastRoutingModule,
        StoreModule.forFeature('lastRedcr', lastReducer)
    ]
})
export class LastModule{

}