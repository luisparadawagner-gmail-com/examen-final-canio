import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../clase/noticia';
import { NoticiaComponent } from '../noticia/noticia.component';
import { ServiceService } from '../servicio/service.service';

@Component({
  selector: 'app-listar-noticia',
  templateUrl: './listar-noticia.component.html',
  styleUrls: ['./listar-noticia.component.css']
})
export class ListarNoticiaComponent implements OnInit {

  displayedColumns: string [] = [ 'titulo' , 'texto' , 'fechaPublicacion' , 'estado', 'editar', 'cambiarEstado'];
  dataSource : any[] = [];

  param : any;
  parm : any;
  

  constructor(private route: ActivatedRoute, private router : Router, private serviceService : ServiceService) { }

  ngOnInit(): void {
    this.getNoticias();
  }

  getNoticias(){
    this.serviceService.getNoticias().subscribe((noticias)=>{
      debugger;
      this.dataSource = noticias;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length){
        this.recibirNoticia(this.param);
      }
    });
  }

  recibirNoticia(noticia : NoticiaComponent){
    debugger;
    this.dataSource.push(noticia);
  }

  editar(noticia) {	
    let noticiaTemp : Noticia = {
      titulo : noticia.titulo,
      texto : noticia.texto,
      fechaPublicacion : noticia.fechaPublicacion,
      estado : noticia.estado
    }

    this.router.navigate(['/noticia-component', noticia]);
    debugger;	
  }

 

  agregar() {
    this.router.navigate(['/noticia-component']);
    debugger;	
  }

  cambiarEstado(noticia) {	

    debugger;	
  }

}
