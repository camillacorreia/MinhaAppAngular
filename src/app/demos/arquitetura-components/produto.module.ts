import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutoRoutingModule } from './produto.route';

import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count.component';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [ ]
})
export class ProdutoModule { }