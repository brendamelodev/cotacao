import { CotacoesService } from './../../service/cotacoes.service';
import { Cotacoes } from './../../model/cotacoes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  ListCotacoes: Cotacoes[] = [];

  constructor(private serviceCotacoes:CotacoesService) { }

  ngOnInit(): void {
    this.findAll();
    console.log("INIT "+ this.ListCotacoes);
  }

  findAll():void{
    this.serviceCotacoes.findAllService().subscribe(
      (resposta)=>{
        this.ListCotacoes = resposta
        console.log("LISTA "+this.ListCotacoes);
      },
      (error)=>{
        alert(error)
      }
    )
  }
}
