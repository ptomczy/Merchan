import { NgModule } from "@angular/core";
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListPage } from './pages/supplier-list/supplier-list';
import { StoreModule } from '@ngrx/store';
import * as fromSuppliersReducer from './reducers/supplier.reducer';
import { SuppliersService } from './services/suppliers.service';
import { SupplierPage } from './pages/supplier/supplier';
import { DataResolverService } from '../resolver/data-resolver.service';

const routes: Routes = [
    {path: '', component: SupplierListPage, pathMatch: 'full'},
    {path: ':suppId', 
        resolve: {
            bubasResolver: DataResolverService
        },
        component: SupplierPage, 
        pathMatch: 'full'}
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