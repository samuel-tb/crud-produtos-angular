import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { JsonPipe } from '@angular/common';

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
    produtos.push(produto);

    localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(produtos));
  }

  excluirProduto(id: string): void{
    const produtos = this.listarProdutos();
    const produtosFiltrados = produtos.filter(p => p.id !== id);

    localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(produtosFiltrados));
  }

  obterProdutoPorId(id: string): Produto | undefined {
    const produtos = this.listarProdutos();
    return produtos.find(p => p.id === id);
  }

  atualizarProduto(produtoAtualizado: Produto) : void {
    const produtos = this.listarProdutos();
    const index = produtos.findIndex(p => p.id === produtoAtualizado.id);

    if (index !== -1) {
      produtos[index] = produtoAtualizado;
      localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(produtos));
    }
  }
}
