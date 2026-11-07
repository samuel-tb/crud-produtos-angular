import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss',
})
export class Produtos {
  categorias: string[] = ['Eletrônicos', 'Móveis', 'Vestuário', 'Alimentos', 'Periféricos'];

  // Objeto temporário para segurar os dados que o usuário digitar
  novoProduto: Produto = { nome: '', preco: 0, quantidadeEstoque: 0, categoria: '' };

  mostrarMensagemSucesso: boolean = false;

  // Injeção do serviço que salva no LocalStorage
  constructor (
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void{

    // Verifica se existe um ID na URL assim que a tela abre
    const idParam = this.route.snapshot.paramMap.get('id');

    if(idParam){
      const produtoEncontrado = this.produtoService.obterProdutoPorId(idParam);
      if(produtoEncontrado){
        this.novoProduto = { ...produtoEncontrado } // carrega os dados na tela
      }
    }
  }

  mensagemSucesso: string = '';

  salvar(): void{
    if(!this.novoProduto.nome || !this.novoProduto.categoria) return;

    if(this.novoProduto.id){
      this.produtoService.atualizarProduto(this.novoProduto);
      this.mensagemSucesso = 'Produto atualizado com sucesso!';
    } else{
      this.produtoService.adicionarProduto(this.novoProduto);
      this.mensagemSucesso = 'Produto cadastrado com sucesso!'
    }

    this.mostrarMensagemSucesso = true;

    setTimeout(() => {
      this.mostrarMensagemSucesso = false;
      this.router.navigate(['/lista']);
    }, 1500);
  }


}
