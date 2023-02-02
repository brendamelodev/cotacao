import { Moeda } from './../../model/moeda';
import { CotacoesService } from './../../service/cotacoes.service';
import { Cotacoes } from './../../model/cotacoes';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listCotacoes: Cotacoes[] = [];

  formFilter: FormGroup = this.form.group({
    moeda: ['', [Validators.required]],
    dataInicial: ['', [Validators.required]],
    dataFinal: ['', [Validators.required]]
  })

  listMoeda: Moeda[] = [
    {
      "ID": "AUD",
      "TEXT": "Dólar australiano"
    },
    {
      "ID": "CAD",
      "TEXT": "Dólar canadense"
    },
    {
      "ID": "EUR",
      "TEXT": "Euro"
    },
    {
      "ID": "USD",
      "TEXT": "Dólar dos Estados Unidos"
    }
  ];

  constructor(private serviceCotacoes: CotacoesService, private form: FormBuilder) { }

  ngOnInit(): void { this.findAll(); }

  findAll(): void {
    let dataInicial = new Date()
    let dataFinal = new Date()
    this.serviceCotacoes.findAllService(moment(dataInicial).format('DD/MM/YYYY'), moment(dataFinal).format('DD/MM/YYYY')).subscribe(
      (resposta) => { this.listCotacoes = resposta.value },
      (error) => { alert(error) }
    )
  }

  consultData(moeda: any, dataInicial: any, dataFinal: any) {
    this.serviceCotacoes.QuotationCurrencyPeriod(moeda, moment(dataInicial).format('DD/MM/YYYY'), moment(dataFinal).format('DD/MM/YYYY')).subscribe(
      (resposta) => { this.listCotacoes = resposta.value },
      (error) => { alert(error) }
    )
  }

  updateData() { location.reload() }

  returnIfDateIsIncompatible(dataInicial: any, dataFinal: any) {
    return moment(dataFinal).format('DD/MM/YYYY') < moment(dataInicial).format('DD/MM/YYYY');
  }
}
