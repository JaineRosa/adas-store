import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../servicos/produto.service';
import { CategoriaService } from '../../servicos/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent {

  categorias: Categoria[] = [];

  carregarCategorias(): void {
    this.categoriaService.findAll().subscribe(retorno => {
      this.categorias = retorno;
    })
  }

  produto: Produto = {

    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
    categoria: {
      id: 0,
      nome: '',
      status: false
    }
  };
  isEdicao: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarCategorias();
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log("teste " + id)
    if (id && id != 0) {
      this.isEdicao = true;
      this.produtoService.findById(id).subscribe(retorno => {
        this.produto = retorno;
      })
    }
  }

  salvar(): void {
    if (this.isEdicao) {
      this.produtoService.update(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    } else {
      this.produtoService.add(this.produto).subscribe(() => {
        this.router.navigate(['/produtos']);
      });
    }
  }

}
