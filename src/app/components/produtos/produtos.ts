import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})
export class Produtos {
  categorias: string[] = ['Eletrônicos', 'Móveis', 'Vestuário', 'Alimentos', 'Periféricos'];
}
