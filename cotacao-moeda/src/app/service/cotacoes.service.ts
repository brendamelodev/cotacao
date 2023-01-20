import { HttpClient } from '@angular/common/http';
import { Cotacoes } from './../model/cotacoes';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {
  urlInicio: string = environment.inicioUrl;
  urlFinal: string = environment.finalUrl;

  constructor(private http: HttpClient) {}

  findAllService():Observable<Cotacoes>{
    const addUrl = this.urlInicio + "@moeda='EUR'&@dataInicial='07-06-2022'&@dataFinalCotacao='07-25-2022'" + this.urlFinal
    return this.http.get<Cotacoes>(addUrl)
  };
}
