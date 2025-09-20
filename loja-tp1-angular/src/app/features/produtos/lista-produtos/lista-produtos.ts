import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";
import { ProdutoService } from '../services/produto.service'

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);

  private produtos = toSignal<Produto[], Produto[]>(this.produtoService.listar(), {initialValue: []})

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos().filter(p => p.promo) : this.produtos());

  alternarPromo(){
    this.apenasPromo.update(p => !p);
  }

  onAddProduct(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}\n${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}