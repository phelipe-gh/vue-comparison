<template lang='pug'>
  b-card.border-radius-header.text-center.border-radius.full(header='Distribuição de valor por faixa de atraso')
    b-card-text.max-height-card.center
      #chart
        apexchart.mt-3.pointer(type="donut" width="380" :options='chartOptions' :series='series')
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'PriceGraph',
  props: {
    data: {},
  },
  components: {
    apexchart: VueApexCharts,
  },
  data() {

    return {
      series: this.data.series,
      chartOptions: {
        colors: ['#808285', '#2e3c50', '#008561', '#f2d410', '#f8dddf', '#cc2936'],
        labels: this.data.labels,
        chart: {
          width: 380,
          type: 'donut',
        },
        yaxis: {
          labels: {
            formatter(val) {

              return 'R$ ' + Number(val).toLocaleString('pt-br', { currency: 'BRL' }).replace('.', ',');

            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {

            return val.toFixed(2).replace('.', ',') + '%';

          },
        },
        responsive: [{
          breakpoint: 380,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        }],
        legend: {
          position: 'bottom',
          offsetY: 0,
          formatter(val) {

            return val + '¨';

          },
        },
      },
    };

  },
};
</script>
<style scoped lang="scss">
.pointer {
  cursor: pointer;
}
</style>
