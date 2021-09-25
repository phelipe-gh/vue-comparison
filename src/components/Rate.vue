<template lang='pug'>
div
  b-row
    b-col.mb-4(xl='6', md='12' lg='12')
      b-row
        b-col(cols=6)
          Card(:comparison='data.companyRate' :simple='true' :isString='true')
        b-col(cols=6)
          Card(:comparison='data.sectorRate' :simple='true' :isString='true')
    b-col.mb-4(xl='6', md='12' lg='12')
      Card(:comparison='data.debt' :simple='true' :default_rate='true')
  b-row.mb-4
    b-col.mb-4(xl='6', md='12' lg='12')
      MonthlyVariation(:variation='data.variationMonthly', sizeLimited='max-size')
    b-col(xl='6', md='12' lg='12')
      b-row
        b-col(xl='6', md='6' lg='6')
          b-card.border-radius-header.text-center.border-radius(header='Taxa do Setor')
            b-card-text.max-height-card
              BrazilGraph(:regions='data.regional')
        b-col(xl='6', md='6' lg='6')
          PieGraph(:data='data.pieGraph')
  b-row.mb-5
    b-col(cols=12)
      b-card.border-radius-header.text-center.border-radius(header='Taxa mensal')
        b-card-text
          ColumnGraphWithLine(:dataLabels='data.monthlyFee.dataLabels', :dataSeries='data.monthlyFee.dataSeries' :descriptions='data.monthlyFee.descriptions')
</template>
<script>
import Card from './Card.vue';
import MonthlyVariation from './MonthlyVariation.vue';
import ColumnGraphWithLine from './ColumnGraphWithLine.vue';
import PieGraph from './PieGraph.vue';
import BrazilGraph from './BrazilGraph.vue';

export default {
  props: {
    data: { },
  },

  components: {
    ColumnGraphWithLine,
    MonthlyVariation,
    BrazilGraph,
    PieGraph,
    Card,
  },

  data() {

    return {};

  },

};
</script>
<style lang='css'>

</style>
