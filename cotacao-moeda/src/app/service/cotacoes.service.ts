import { HttpClient } from '@angular/common/http';
import { Cotacoes } from './../model/cotacoes';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {
  urlInicio: any = environment.inicioUrl;
  urlFinal: any = environment.finalUrl;

  constructor(private http: HttpClient) {}

  findAllService(dataInicial: any, dataFinal: any):Observable<Cotacoes>{
    const addUrl = this.urlInicio + "@moeda='EUR'"+"&@dataInicial='"+dataInicial+"'&@dataFinalCotacao='"+dataFinal+"'" + this.urlFinal
    return this.http.get<Cotacoes>(addUrl)
  };

  QuotationCurrencyPeriod(moeda: any, dataInicial: any, dataFinal: any):Observable<Cotacoes>{
    const url = this.urlInicio + "@moeda='"+moeda+"'&@dataInicial='"+dataInicial+"'&@dataFinalCotacao='"+dataFinal+"'" + this.urlFinal
    return this.http.get<Cotacoes>(url)
  }
}
