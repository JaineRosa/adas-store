import { Component } from '@angular/core';
import { ProdutoService } from '../../servicos/produto.service';
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.scss'
})
export class ProdutoListaComponent {

  produtos:  Produto[] = [];

  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void{
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.findAll().subscribe(retorno =>{
      this.produtos = retorno;
    })
  }

  delete(id: number): void{
    this.produtoService.delete(id).subscribe(() =>{
      this.carregarProdutos();
    })
  }

}
