import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { ManagerGuard } from './guards/manager.guard';
import { FramePage } from './pages/shared/frame/frame.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule) },
  {
    path: '',
    component: FramePage,
    canActivate: [AuthorizedGuard],
    children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule), canActivate: [AuthorizedGuard] },
      { path: 'orders', loadChildren: () => import('./pages/store/order/order.module').then(m => m.OrderPageModule), canActivate: [AuthorizedGuard] },
      // { path: 'order/:number', loadChildren: () => import('./pages/store/order-details/order-details.module').then(m => m.OrderDetailsPageModule), canActivate: [AuthorizedGuard] },
      { path: 'order/:number', loadChildren: () => import('./pages/store/order-teste/order-teste.module').then(m => m.OrderTestePageModule) },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
