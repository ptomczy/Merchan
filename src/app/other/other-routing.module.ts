import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { OtherPage } from './pages/other';

export const routes: Routes = [
    {path: '', component: OtherPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class OtherRoutingModule {
}