import { ProdutosResolve } from './../services/produto.resolve';
import { ProdutoAppComponent } from './produto.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';

export const produtoRouterConfig: Routes = [
  { path: '', component: ProdutoAppComponent,
    children: [
      { path: '', redirectTo: 'todos' },
      { 
        path: ':estado',
        component: ProdutoDashboardComponent,
        resolve: {
          produtos: ProdutosResolve
        },
        data: {
          teste: 'informação'
        }
      },
      { path: 'editar/:id', component: EditarProdutoComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(produtoRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class ProdutoRoutingModule { }