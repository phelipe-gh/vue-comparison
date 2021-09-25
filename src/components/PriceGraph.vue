<template lang='pug'>
  div
    b-row
      b-col(cols=12)
        label.title Variação
    b-row.max-width
      .app.b-col.col-12
        #chart
          apexchart(type='line' height='280' :options='chartOptions' :series='series')
    b-row
      b-col(cols=12)
        b-icon-arrow-up-right-circle-fill.positive(v-if="variationSeries.primaryMessage.status == 'UP'")
        b-icon-arrow-down-right-circle-fill.negative(v-if="variationSeries.primaryMessage.status == 'DOWN'")
        span {{ variationSeries.primaryMessage.message }}
        .divider
      b-col(cols=12)
        b-icon-arrow-up-right-circle-fill.positive(v-if="variationSeries.secondaryMessage.status == 'UP'")
        b-icon-arrow-down-right-circle-fill.negative(v-if="variationSeries.secondaryMessage.status == 'DOWN'")
        span {{ variationSeries.secondaryMessage.message }}
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'PriceGraph',
  props: {
    variationSeries: {},
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {

    return {
      series: this.variationSeries.dataValues,
      chartOptions: {
        colors: ['#f2d411', '#008561'],
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            formatter(val) {

              return val + '%';

            },
          },

        },
        xaxis: {
          type: 'label',
          categories: this.variationSeries.dataLabels,
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };

  },
};
</script>
<style scoped lang="scss">
  .title {
    color: #000;
    font-weight: bold;
    margin-left: 0px;
  }

  span {
    margin-left: 15px;
  }

  .divider {
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
