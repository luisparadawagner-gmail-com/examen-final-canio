import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { ListarNoticiaComponent } from './listar-noticia/listar-noticia.component';


const routes: Routes = [
  { path : 'noticia-component', component: NoticiaComponent},
  { path : 'listar-noticia-component', component: ListarNoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
