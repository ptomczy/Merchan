import { NgModule } from "@angular/core";
import { PAGES } from './index';
import { StoreModule } from '@ngrx/store';
import * as fromSFreducer from './reducers/sf.reducer';


@NgModule({
    declarations: [PAGES],
    imports:[StoreModule.forRoot({myOnlyReducer: fromSFreducer.reducer})],
    exports: [PAGES]
})
export class SuperFormsModule {
    
}