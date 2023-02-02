export const environment = {
  production: true,
  inicioUrl: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?",
  finalUrl: "&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
};
