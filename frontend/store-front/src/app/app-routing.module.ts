import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './componentes/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './componentes/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './componentes/categoria/categoria-detalhe/categoria-detalhe.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriaListaComponent},
  {path: 'categoria/nova', component: CategoriaFormComponent},
  {path: 'categoria/editar/:id', component: CategoriaFormComponent},
  {path: 'categoria:id', component: CategoriaDetalheComponent},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
