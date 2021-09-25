<template lang='pug'>
  b-row.max-width
    .app.b-col.col-12
        #chart
            apexcharts(type='bar' height='350' :options='chartOptions' :series='series')
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'ColumnGraph',
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    monthlyBilling: {},
  },
  data() {

    return {
      series: this.monthlyBilling.series,
      chartOptions: {
        colors: ['#008561'],
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top',
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {

            return ('R$ ' + Number(val).toFixed(2).toLocaleString('pt-br', { currency: 'BRL' })).replace('.', ',');

          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },

        xaxis: {
          categories: this.monthlyBilling.dataLabels,
          position: 'bottom',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
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

              return 'R$ ' + Number(val).toFixed(0).toLocaleString('pt-br', { currency: 'BRL' });

            },
          },

        },
        title: {
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
    };

  },
};
</script>
<style scoped>
</style>
