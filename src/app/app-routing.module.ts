import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule)
  },
  // {
  //   path: 'supplier/:suppId',
  //   // resolve: {
  //   //   bubasResolver: DataResolverService
  //   // },
  //   loadChildren: () => import ('./suppliers/suppliers.module').then(m => m.SuppliersModule)
  // }
  {
    path: 'other',
    loadChildren: () => import ('./other/other.module').then(m => m.OtherModule)
  },
  {
    path: 'last',
    loadChildren: () => import('./last/last.module').then(m => m.LastModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
