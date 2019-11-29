import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HcPage } from './pages/hc';

export const routes: Routes = [
    {path: '', component: HcPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HcRoutingModule {

}