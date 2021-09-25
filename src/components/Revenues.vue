<template lang='pug'>
div
  b-row
    b-col.mb-4(v-bind:class='this.betweenSizeLimited ? "col-12" : "col-8"')
      b-row
        b-col.mb-4.col-lg-12.col-xl-6
          Card(:comparison='data.yealyMonthly' :simple='false' type='Monthly')
        b-col.mb-4.col-lg-12.col-xl-6
          Card(:comparison='data.yealyComparison' :simple='false' type='Yearly')
      b-row.mt-4
        b-col(cols=12)
          b-card.border-radius
            PriceGraph(:variationSeries='data.yealyGraphLine')
    b-col.mb-4(v-bind:class='this.betweenSizeLimited ? "col-12" : "col-4"')
      MonthlyVariation.overflow(:variation='data.variationMonthly' sizeLimited='secondary-size')
  b-row.mb-5
    b-col(cols=12)
      b-card.border-radius-header.text-center.border-radius(header='Faturamento da empresa em valor(R$)')
        b-card-text
          ColumnGraph(:monthlyBilling='data.monthlyBilling')
</template>
<script>
import MonthlyVariation from './MonthlyVariation.vue';
import ColumnGraph from './ColumnGraph.vue';
import PriceGraph from './PriceGraph.vue';
import Card from './Card.vue';

export default {
  props: {
    data: { },
  },

  components: {
    MonthlyVariation,
    ColumnGraph,
    PriceGraph,
    Card,
  },

  data() {

    return {
      betweenSizeLimited: false,
      colDisposition: null,
    };

  },

  created() {

    window.addEventListener('resize', this.getScreen);
    this.screenWidth = window.window.innerWidth;

  },
  destroyed() {

    window.removeEventListener('resize', this.getScreen);

  },

  methods: {
    getScreen() {

      const sizeScreenWidth = window.innerWidth;
      this.betweenSizeLimited = !!((sizeScreenWidth <= 1567));

    },
  },

};
</script>
<style lang='css'>
  .overflow {
    overflow: auto;
  }
</style>
