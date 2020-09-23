import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../clase/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {


  noticiaForm: FormGroup;

  noticias: any[] = [];
  idNoticia: any;
  
  noticia : any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.noticia = this.param;
    } 

    this.initForm(this.noticia);
  }

  nombreControl = new FormControl('Noticia');

  initForm(modificar : Noticia){   
    this.noticiaForm = this.fb.group({
        titulo : [modificar ? modificar.titulo: '', Validators.required],
        texto : [modificar ? modificar.texto:'', Validators.required],
        fechaPublicacion : [modificar ? modificar.fechaPublicacion: ''],
        estado : [modificar ? modificar.estado: '']
    });
  }

  subir(){
    let noticiaTemp : Noticia = this.noticiaForm.value;
    this.router.navigate(['listar-noticia-component', noticiaTemp]);
    debugger;
  };


   

}
