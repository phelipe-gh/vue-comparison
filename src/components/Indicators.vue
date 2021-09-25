<template lang='pug'>

  b-row.mt-4.center(v-if='indicators')
    b-col.center.column
      img.indicators.cursor-pointer(src='../assets/img/tag-highlight.png')(@click="redirectTo('ipca')")
      span.title(@click="redirectTo('ipca')") Inflação
        el-tooltip.information(placement='top')
          label(slot='content')
            | Para mais informações, clique no ícone acima
          el-button.border-none.paddinf-left(icon='el-icon-warning-outline' circle='')
      span.description(@click="redirectTo('ipca')") IPCA | Mensal
      span.resultValue(@click="redirectTo('ipca')") {{ ipca.replace('.', ',') }}%

    b-col.center.column
      img.indicators.cursor-pointer(src='../assets/img/tag-highlight.png')(@click="redirectTo('inpc')")
      span.title(@click="redirectTo('inpc')") Inflação
        el-tooltip.information(placement='top')
          label(slot='content')
            | Para mais informações, clique no ícone acima
          el-button.border-none.paddinf-left(icon='el-icon-warning-outline' circle='')
      span.description(@click="redirectTo('inpc')") INPC
      span.resultValue(@click="redirectTo('inpc')") {{ inpc.replace('.', ',') }}%

    b-col.center.column
      img.indicators.cursor-pointer(src='../assets/img/money-highlight.png')(@click="redirectTo('pib')")
      span.title(@click="redirectTo('pib')") Variação do PIB
        el-tooltip.information(placement='top')
          label(slot='content')
            | Para mais informações, clique no ícone acima
          el-button.border-none.paddinf-left(icon='el-icon-warning-outline' circle='')
      span.description(@click="redirectTo('pib')") SCNT | Acumulado 4 trimestre
      span.resultValue(@click="redirectTo('pib')") {{ pib.replace('.', ',') }}%

    b-col.center.column
      img.indicators.cursor-pointer(src='../assets/img/unemployment-highlight.png')(@click="redirectTo('unemployment')")
      span.title(@click="redirectTo('unemployment')") Desemprego
        el-tooltip.information(placement='top')
          label(slot='content')
            | Para mais informações, clique no ícone acima
          el-button.border-none.paddinf-left(icon='el-icon-warning-outline' circle='')
      span.description(@click="redirectTo('unemployment')") PNAD | Contínua
      span.resultValue(@click="redirectTo('unemployment')") {{ unemployment.replace('.', ',') }}%

</template>

<script>
import IBGEService from '../service/ibgeService.js';

export default {
  name: 'Indicators',

  components: {
    IBGEService,
  },

  data() {

    return {
      indicators: null,
      unemployment: '',
      semester: null,
      inflationMonthly: '',
      pib: '',
      ipca: '',
      inpc: '',
    };

  },

  async created() {

    this.semester = new Date().getMonth > 6 ? new Date().getFullYear() + '01' : new Date().getFullYear() + '02';

    this.indicators = await IBGEService.getIBGEIndicators();

    this.unemployment = this.indicators['4094'].resultados[0].series[0].serie[this.semester];
    this.pib = this.indicators['5932'].resultados[0].series[0].serie[this.semester];

    const ipcaCollection = Object.values(this.indicators['7060'].resultados[0].series[0].serie);
    this.ipca = ipcaCollection[ipcaCollection.length - 1];

    const inpcCollection = Object.values(this.indicators['1736'].resultados[0].series[0].serie);
    this.inpc = inpcCollection[inpcCollection.length - 1];

  },

  methods: {
    redirectTo(indicator) {

      if (indicator === 'ipca') window.open('https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9256-indice-nacional-de-precos-ao-consumidor-amplo.html?=&t=o-que-e', '_blank').focus();
      else if (indicator === 'pib') window.open('https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9300-contas-nacionais-trimestrais.html?=&t=o-que-e', '_blank').focus();
      else if (indicator === 'inpc') window.open('https://www.ibge.gov.br/estatisticas/economicas/precos-e-custos/9258-indice-nacional-de-precos-ao-consumidor.html?=&t=o-que-e', '_blank').focus();
      else window.open('https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html?=&t=o-que-e', '_blank').focus();

    },
  },

};
</script>
<style scoped lang="scss">
.resultValue {
  color: #f78d2c;
  font-weight: 500;
  font-size: 20px;
}
.column {
  display: grid;
  justify-items: center;
}
.description {
  font-size: 15px;
  font-weight: 290;
  margin-top: -5px;
}
.title {
  font-size: 19px;
  font-weight: 510;
  margin-left: 15px;
}

span {
  cursor: pointer;
}

.cursor-pointer {
  cursor: pointer;
}

.information {
  color: #f78d2c;
}

.border-none {
  border: none !important;
  background-color: #f1f4fe;
}

.paddinf-left {
  padding-left: 2px;
  padding-top: 0px;
}
</style>
