<template lang='pug'>
  b-row.max-width
    .app.b-col.col-12
        #chart
            apexcharts(type='line' height='350' :options='chartOptions' :series='series')
    b-row
      b-col.init(cols=12)
        b-icon-arrow-up-right-circle-fill.positive(v-if="descriptions.primaryMessage.status == 'UP'")
        b-icon-arrow-down-right-circle-fill.negative(v-if="descriptions.primaryMessage.status == 'DOWN'")
        span {{ descriptions.primaryMessage.message }}
        .divider
      b-col.init(cols=12)
        b-icon-arrow-up-right-circle-fill.positive(v-if="descriptions.secondaryMessage.status == 'UP'")
        b-icon-arrow-down-right-circle-fill.negative(v-if="descriptions.secondaryMessage.status == 'DOWN'")
        span {{ descriptions.secondaryMessage.message }}
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    dataLabels: {},
    dataSeries: {},
    descriptions: {},
  },
  data() {

    return {
      series: this.dataSeries,
      chartOptions: {
        colors: ['#008561', '#f2d410'],
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 5],
          curve: 'smooth',
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
          },
        },
        labels: this.dataLabels,
        markers: {
          size: 0,
        },
        xaxis: {
          categories: this.dataLabels,
        },
        yaxis: {
          min: 0,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            formatter(val) {

              return Number(val).toFixed() + '%';

            },
          },

        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter(y) {

              if (typeof y !== 'undefined') {

                return y.toFixed(2) + '%';

              }
              return y;

            },
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

  .init {
    text-align: initial;
  }
</style>
