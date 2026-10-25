import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly CHAVE_STORAGE = 'produtos_salvos';

  constructor() {}

  listarProdutos(): Produto[] {
    const dados = localStorage.getItem(this.CHAVE_STORAGE);
    if(dados){
      return JSON.parse(dados);
    }
    return[];
  }  

  adicionarProduto(produto: Produto): void{
    const produtos = this.listarProdutos();
    produto.id = Math.random().toString(36).substring(2, 9);

    localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(produtos));
  }

  excluirProduto(id: string): void{
    const produtos = this.listarProdutos();
    const produtosFiltrados = produtos.filter(p => p.id !== id);

    localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(produtosFiltrados));
  }
}
