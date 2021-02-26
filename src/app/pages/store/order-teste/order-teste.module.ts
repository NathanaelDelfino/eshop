import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTestePageRoutingModule } from './order-teste-routing.module';

import { OrderTestePage } from './order-teste.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderTestePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [OrderTestePage]
})
export class OrderTestePageModule { }
