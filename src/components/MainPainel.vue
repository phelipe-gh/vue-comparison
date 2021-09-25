<template lang='pug'>
div(style='background-color: #f1f4ff;')
  b-row(align-v='stretch' style='width:100%;')
    .container(v-if='loading')
      b-spinner.loading(variant='success')
    b-col.div-sidebar(xl='', md='' lg='')
      b-col(align-self='stretch' cols=1)
        Sidebar(
          v-if='!loading'
          mainActivity='Produtos Alimentícios em Geral'
          :filter='filter'
          @applyFilterDashboard='applyFilterDashboard'
        )
        div.menu(v-b-toggle.sidebar-backdrop='')
          h2
            b-icon-caret-right-fill
    b-col(xl='11', md='11' lg='11')
      Indicators
      b-row(style='margin-top:20px')
        h2 CorpClub
        b-col(cols=12)
          b-row
            b-col
              span.subtitle {{ filter.optionsAnalysisSelected.label }}
            b-col.end.grid
              b-row
                span Dados atualizados: 5 de Setembro de 2021 às 00:00
              b-row
                span(id="reference") Mês de referência: Agosto de 2021
          el-tag.mb-3.mt-1.margin-right(v-for='tag in tags' :key='tag.name' closable='' :type='tag.type' @close="handleClose(tag.name)")
            |{{tag.name}}
          span.clean-filter(@click='cleanFilter()' v-if='tags.length > 0') Limpar filtros
      b-row.center(v-if="this.filter.optionsAnalysisSelected.id === 1 && this.data.revenues")
        Revenues(:data='this.data.revenues')
      b-row(v-if="this.filter.optionsAnalysisSelected.id === 2")
        Rate(:data='this.data.default_rate')

</template>
<script>
import Sidebar from './SidebarFilter.vue';
import RateService from '../service/rateService.js';
import Indicators from './Indicators.vue';
import Revenues from './Revenues.vue';
import Rate from './Rate.vue';

export default {
  components: {
    Indicators,
    RateService,
    Revenues,
    Sidebar,
    Rate,
  },

  data() {

    return {
      data: '',
      loading: false,
      clearFilter: false,
      tags: [],
      filter: {
        range: '',
        sectorsAdded: [],
        optionsAnalysisSelected: { value: 'FATURAMENTO', label: 'Faturamento', id: 1 },
      },
    };

  },

  async created() {

    this.data = await RateService.getRevenuesDashboard();

  },

  methods: {

    applyFilterDashboard(filter) {

      if (filter.range.length > 0 && !JSON.parse(JSON.stringify(this.tags)).find((element) => element === 'Período')) {

        this.tags.push(JSON.parse(JSON.stringify({ name: 'Período', type: 'info' })));

      }

      if (filter.sectorsAdded.length > 0 && !JSON.parse(JSON.stringify(this.tags)).find((element) => element === 'Setores')) {

        this.tags.push({ name: 'Setores', type: 'info' });

      }

    },

    cleanFilter() {

      this.tags = [];
      this.filter = {
        range: '',
        sectorsAdded: [],
        optionsAnalysisSelected: this.filter.optionsAnalysisSelected.id === 1 ? { value: 'FATURAMENTO', label: 'Faturamento', id: 1 } : { value: 'INADIMPLÊNCIA', label: 'Inadimplência', id: 2 },
      };

      this.applyFilterDashboard(this.filter);

    },

    handleClose(tag) {

      this.tags = this.tags.filter((element) => element.name !== tag);
      // eslint-disable-next-line no-unused-expressions
      tag === 'Setores' ? this.filter.sectorsAdded = [] : this.filter.range = '';

    },
  },

};
</script>
<style lang='css'>
  b-icon-caret-right-fill {
    color: black;
  }

  .menu {
    position: fixed;
    height: 100% !important;
    display: flex;
    align-items: center;
    width: 35px;
    border:1px solid rgb(207, 207, 207);
    border-radius: 5px;
    cursor: pointer;
  }

  .lineGraph {
    height: 350px;
  }

  .card-header:first-child {
    border-top-right-radius: 15px;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 50;
  }

  .container {
    width: 100%;
    height: 100vh;
    z-index: 15;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.774);
  }

  .div-sidebar {
    max-width:45px;
    margin-right:40px
  }

  .clean-filter {
    color: rgb(199, 13, 13);
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    margin-left: 15px;
  }

  .el-tag.el-tag--info .el-tag__close {
    color: #038763;
  }

  .subtitle {
    font-weight: 500;
    font-size: 22px;
    margin-right: 20px;
  }

  .margin-right {
    margin-right: 5px;
  }

  .grid {
    display: grid;
    font-size: 13px;
    margin-right: 20px;
  }

  .max-height {
    max-height: 665px;
  }

  .overflow {
    overflow: auto;
  }

  .indicators {
    max-height: 60px;
    max-width: 60px;
    height: 60px;
    width: 60px;
  }
</style>
