import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaFormComponent } from './componentes/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './componentes/categoria/categoria-detalhe/categoria-detalhe.component';
import { ProdutoListaComponent } from './componentes/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './componentes/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './componentes/produto/produto-detalhe/produto-detalhe.component';
import { CabecalhoComponent } from './componentes/compartilhados/cabecalho/cabecalho.component';
import { MenuComponent } from './componentes/compartilhados/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaListaComponent } from './componentes/categoria/categoria-lista/categoria-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaDetalheComponent,
    CategoriaFormComponent,
    CategoriaListaComponent,
    ProdutoListaComponent,
    ProdutoFormComponent,
    ProdutoDetalheComponent,
    CabecalhoComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
