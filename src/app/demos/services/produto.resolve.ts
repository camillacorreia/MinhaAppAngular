import { Injectable } from '@angular/core';
import { Produto } from '../arquitetura-components/models/produto';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from './produto.service';


@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {
    
  constructor(private produtoService: ProdutoService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.produtoService.obterTodos(route.params.estado);
  }

}