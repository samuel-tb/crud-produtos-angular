import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto';
import { CurrencyPipe } from '@angular/common'; // Importação para formatar moeda

@Component({
  selector: 'app-lista-produtos',
  imports: [CurrencyPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss',
})
export class ListaProdutos implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}
  
  // O ngOnInit roda automaticamente assim que a tela é aberta
  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.produtos = this.produtoService.listarProdutos();
  }

  excluir(id: string | undefined): void{
    if(!id) return;

    if(confirm('Tem certeza que deseja excluir este produto?')) {
      this.produtoService.excluirProduto(id);
      this.carregarProdutos(); // Recarrega a lista para remover o item da tela visualmente
    }
  }
  
}
