<template lang='pug'>
b-sidebar#sidebar-backdrop(title='Sidebar with backdrop' backdrop-variant='transparent' backdrop='' shadow='' width='500px' no-header)
    template(#default='{ hide }')

        b-row.mt-5.justify-content-md-center.max-width
            b-col.center(cols='7')
                b-form-checkbox.margin-top#checkbox-1(v-model='hideSideBarChecked' name='hideSideBar' value='accepted' unchecked-value='not_accepted')
                    span &nbsp Esconder ao aplicar os filtros
            b-col.end(cols='5')
                el-button.default-button(style='margin-right: 10px' @click='applyFilter(false)' type='info' plain='' :disabled='isValidFilter')
                    |Aplicar
                b-button.btn.default-button(id='hideSidebar' block @click='hide')
                    b-icon-chevron-double-left

        b-row.position-header
            b-col(lg='11')
                .divider
        b-row.mt-4.center
            b-col(cols='11')
                span.title-item Atividade Principal:
                el-input(v-model='mainActivity' :disabled='true' id='main-activity')
        b-row.mt-4.center
            b-col(cols='11')
                span.title-item Análise:
                br
                el-select.width-100(v-model='filter.optionsAnalysisSelected' placeholder='Select')
                    el-option(v-for='item in optionsAnalysis' :key='item.value' :label='item.label' :value='item')

        b-row.mt-4.center
            b-col(cols='11')
                span.title-item Período
                br
                el-date-picker.width-100(v-model='filter.range' type='monthrange' range-separator='-' start-placeholder='Mês inicial' end-placeholder='Mês final')
        b-row.mt-4.center
            b-col(cols='11')
                span.title-item Setores
                br
                el-select.width-100(v-model='filter.sectorsAdded' multiple='' filterable='' allow-create='' default-first-option='' placeholder='Escolher setor')
                    el-option(v-for='item in optionsSectors' :key='item.value' :label='item.label' :value='item.value')

</template>
<script>
export default {
  name: 'SidebarFilter',
  props: {
    mainActivity: String,
    filter: {},
  },
  data() {

    return {
      hideSideBarChecked: 'accepted',
      optionsAnalysis: [{ value: 'FATURAMENTO', label: 'Faturamento', id: 1 }, { value: 'INADIMPLÊNCIA', label: 'Inadimplência', id: 2 }],
      optionsSectors: [
        {
          value: 'INDUSTRIA',
          label: 'Indústria',
        },
        {
          value: 'VAREJO',
          label: 'Varejo',
        },
        {
          value: 'SERVICOS',
          label: 'Serviços',
        },
        {
          value: 'ATACADO/DISTRIBUIDOR',
          label: 'Atacado/Distribuidor',
        }],
    };

  },

  methods: {
    applyFilter() {

      if (this.hideSideBarChecked === 'accepted') document.getElementById('hideSidebar').click();
      this.$emit('applyFilterDashboard', this.filter);

    },
  },

  computed: {
    isValidFilter() {

      return false;

    },
  },
};
</script>
<style lang='scss' scoped>
.margin-top {
  margin-top: 5px;
}

.btn {
  color: rgb(63, 88, 52);
}

.position-header {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.width-100 {
  width: 100% !important;
}
</style>
