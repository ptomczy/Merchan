import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LastPage } from './pages/last';

const routes: Routes = [
    {path: '', component: LastPage, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class LastRoutingModule{
    
}