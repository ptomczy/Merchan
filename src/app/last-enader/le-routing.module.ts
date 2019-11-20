import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LePage } from './pages/le';

export const routes: Routes = [
    {path: '', component: LePage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class LeRoutingModule {

}