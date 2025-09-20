import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); //<app-header tituloLoja="'Loja TP1 Angular'"></app-header>
  
  textoSobre = output<string>();

  enviarSobre() {
    this.textoSobre.emit('Técnicas de Programação 1. Desenvolvido por Carine.');
  }
}