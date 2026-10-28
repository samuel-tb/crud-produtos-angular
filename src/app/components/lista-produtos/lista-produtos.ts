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

  idProdutoExcluido: string | undefined = undefined;

  constructor(private produtoService: ProdutoService) {}
  
  // O ngOnInit roda automaticamente assim que a tela é aberta
  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void{
    this.produtos = this.produtoService.listarProdutos();
  }

  prepararExclusao(id: string | undefined): void {
    if(id){
      this.idProdutoExcluido = id;
    }
  }

  cancelarExclusao(): void {
    this.idProdutoExcluido = undefined;
  }

  confirmarExclusao(): void {
    if(this.idProdutoExcluido) {
      this.produtoService.excluirProduto(this.idProdutoExcluido);
      this.carregarProdutos();
      this.idProdutoExcluido = undefined;
    }
  }
  
}
