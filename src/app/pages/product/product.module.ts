import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule, routerComponents } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListComponent } from './list/list.component';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [ProductComponent, ListComponent, ...routerComponents],
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    CommonModule,
    ProductRoutingModule,
    Ng2SmartTableModule,
  ]
})
export class ProductModule { }
