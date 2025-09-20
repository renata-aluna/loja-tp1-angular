import { Injectable, inject } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
    {
      id: 1,   
      nome: 'Teclado Mecânico',
      preco: 1288,
      descricao: 'Switch blue, RGB.',
      imageUrl: 'images/keyboard.jpg',
      promo: true,
      estado: 'novo'  
    },
    {
      id: 2,  
      nome: 'Teclado Mecânico',
      preco: 1288,
      descricao: 'Switch blue, RGB.',
      imageUrl: 'images/keyboard.jpg',
      estado: 'usado'  
    },
    {
      id: 3,   
      nome: 'Teclado Mecânico',
      preco: 1288,
      descricao: 'Switch blue, RGB.',
      imageUrl: 'images/keyboard.jpg',
      estado: 'esgotado' 
    },
  ];

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] listar()');
    return of(this.listaMock).pipe(delay(250));
  }

  getById(id: number): Observable<Produto | undefined>{
    return of(this.listaMock.find(p => p.id == id));

  }
}