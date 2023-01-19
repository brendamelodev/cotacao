import { HttpClient } from '@angular/common/http';
import { Cotacoes } from './../model/cotacoes';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {
  url: string = environment.urlApi;

  constructor(private http: HttpClient) {}

  findAllService():Observable<Cotacoes[]>{
    const addUrl = this.url + "(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='EUR'&@dataInicial='07-06-2022'&@dataFinalCotacao='07-25-2022'&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
    return this.http.get<Cotacoes[]>(addUrl)
  };

}
