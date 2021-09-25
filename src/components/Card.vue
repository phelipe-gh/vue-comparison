<template lang='pug'>
  b-card.full.border-radius(id='main-card')
    div(v-if='!simple')
      b-row
        b-col(cols=9)
          b-card-text
            label.title {{ comparison.title }}
            el-tooltip.information(placement='top')
              div(slot='content')
                label(v-if='type === "Yearly"')
                  | Comparativo do resultado acumulado do ano de referência
                  br
                  | com o mesmo período do ano anterior da empresa.
                label(v-else)
                  | Comparativo do mês de referência da empresa
                  br
                  |com o mês anterior
              el-button.border-none(icon='el-icon-warning-outline' circle='')
            div.margin-left
              h2 {{ comparison.yealyComparisonValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
              span {{ comparison.lastUpdate }}

        b-col.text-end(cols=3)
          b-row
            span.text-default Empresa
          b-row
            span.percentage-company(v-bind:class="classLabelCompany") {{ comparison.percentageCompany.toLocaleString('pt-br',{currency: 'BRL'}) }}%
          b-row
            span.text-default Setor
          b-row
            span.percentage-sector(v-bind:class="classLabelSector") {{ comparison.percentageSector.toLocaleString('pt-br',{currency: 'BRL'}) }}%

      .divider

      b-row.sub-title
        b-col(v-if="comparison.overview == 'UP'" cols=1)
          b-icon-arrow-up-right-circle-fill.positive
        b-col(v-if="comparison.overview == 'DOWN'" cols=1)
          b-icon-arrow-down-right-circle-fill.negative
        b-col(cols=11)
          span.desc-of-value {{ comparison.statusDesc }}
    div(v-if='simple')
      b-row
        b-col(cols=12)
          b-card-text
            label.title {{ comparison.title }}
            el-tooltip.information(placement='top')
              label(slot='content')
                | * Quanto menor esse indicador, melhor para a empresa
                br
                | * Dados atualizados com base no mês de Referência
              el-button.border-none(icon='el-icon-warning-outline' circle='')
        b-col.center.p-4(cols=12 v-if='!isString')
            span(v-bind:class='isBadDebtLabel') R$ {{ comparison.value.toLocaleString('pt-br',{currency: 'BRL'}) }}
        b-col.center.p-4(cols=12 v-else)
            span(v-bind:class='isBadDebtLabel') {{ comparison.percentage.toLocaleString('pt-br',{currency: 'BRL'}) }}
</template>

<script>
export default {
  name: 'Card',
  props: {
    comparison: {},
    simple: Boolean,
    isBadDebt: Boolean,
    isString: Boolean,
    type: String,
  },

  data() {

    return {
      tooltipMessage: '',
    };

  },

  created() {},

  computed: {
    classLabelCompany() {

      return this.comparison.statusCompany === 'DOWN' ? 'text-red' : 'text-green';

    },
    classLabelSector() {

      return this.comparison.statusSector === 'DOWN' ? 'text-red' : 'text-green';

    },
    isBadDebtLabel() {

      return this.isBadDebt ? 'red-text' : 'black-text';

    },
  },
};
</script>
<style scoped lang="scss">
  .title {
    color: black;
    font-weight: bold;
    margin-left: 0;
    font-size: 20px;
  }

  .desc-of-value {
    font-size: 15px;
  }

  .percentage-company {
    font-size: 25px;
  }

  .percentage-sector {
    font-size: 25px;
  }

  .sub-title {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .information {
    margin-left: 5px;
  }

  .red-text {
    color: #cc2936;
    font-size: 45px;
    font-weight: bold;
  }

  .black-text {
    color: black;
    font-size: 45px;
    font-weight: bold;
  }

  .border-none {
    border: none !important;
  }

  .border-none:hover {
    color: #193314;
    background-color: #dddddd;
  }

  .margin-left {
    margin-left: 15px;
    margin-bottom: 25px;
  }
</style>
