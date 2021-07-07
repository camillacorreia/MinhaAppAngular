import { Produto } from './../models/produto';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../components/produto-count.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;

  constructor() { }

  ngOnInit() {
    this.produtos = [
      {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg'
      },
      {
        id: 2,
        nome: 'Teste 2',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg'
      },
      {
        id: 3,
        nome: 'Teste 3',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg'
      },
      {
        id: 4,
        nome: 'Teste 4',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg'
      },
      {
        id: 5,
        nome: 'Teste 5',
        ativo: true,
        valor: 100,
        imagem: 'teclado.jpg'
      },
      {
        id: 6,
        nome: 'Teste 6',
        ativo: false,
        valor: 600,
        imagem: 'headset.jpg'
      }
    ]
  }

  mudarStatus(product: Produto){
    product.ativo = !product.ativo;
  }


  ngAfterViewInit(): void {
    console.log('Objeto do Contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    
    clickTexto.subscribe(() => {
      alert('clicou no texto!');
      return;
    })
  }

}
