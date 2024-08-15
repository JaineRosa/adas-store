import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './componentes/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './componentes/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './componentes/categoria/categoria-detalhe/categoria-detalhe.component';
import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaListaComponent},
  {path: 'categoria/nova', component: CategoriaFormComponent},
  {path: 'categoria/editar/:id', component: CategoriaFormComponent},
  {path: 'categoria:id', component: CategoriaDetalheComponent},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'},

  {path: 'produtos', component: ProdutoListaComponent},
  {path: 'produto/novo', component: ProdutoFormComponent},
  {path: 'produto/editar/:id', component: ProdutoFormComponent},
  {path: 'produto:id', component: ProdutoDetalheComponent},
  {path: '', redirectTo: '/produtos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
