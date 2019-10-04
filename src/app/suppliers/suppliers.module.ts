import { NgModule } from "@angular/core";
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListPage } from './pages/supplier-list/supplier-list';
import { StoreModule } from '@ngrx/store';
import * as fromSuppliersReducer from './reducers/supplier.reducer';
import { SuppliersService } from './services/suppliers.service';

const routes: Routes = [
    {path: '', component: SupplierListPage, pathMatch: 'full'}
]

@NgModule({
    imports: [
        PagesModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot({mtng: fromSuppliersReducer.reducer})
    ],
    providers: [SuppliersService]
})
export class SuppliersModule {

}