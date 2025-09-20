import { Component, signal} from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { Produto } from './model/produto';
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, ListaProdutos, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  prod: Produto = {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Desc. Prod1',
    preco: 179.90
  }

  sobre? : string;

  qtd = signal(1);
  
  receberSobre(texto: string){
    this.sobre = texto;
  }

}