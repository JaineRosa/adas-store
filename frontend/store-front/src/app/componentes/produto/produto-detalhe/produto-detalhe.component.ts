import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../servicos/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.scss'
})
export class ProdutoDetalheComponent {
produto: Produto | undefined;

constructor(
  private produtoService: ProdutoService,
  private route: ActivatedRoute
){}

ngOnImit():void{
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if(id){
    this.produtoService.findById(id).subscribe(data => {
      this.produto = data;
    });
  }
}

}
