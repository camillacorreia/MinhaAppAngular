import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutoRoutingModule } from './produto.route';

import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoService } from '../services/produto.service';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoService
  ],
  exports: [ ]
})
export class ProdutoModule { }