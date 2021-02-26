import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FramePage } from './pages/shared/frame/frame.page';
import { ComponentsModule } from './components/components.module';
import { AuthorizedGuard } from './guards/authorized.guard';
import { ManagerGuard } from './guards/manager.guard';


@NgModule({
  declarations: [
    AppComponent,
    FramePage
  ],
  entryComponents: [],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [AuthorizedGuard, ManagerGuard, {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
