<template lang='pug'>
b-card-group.full(deck='')
  b-card.full.border-radius-header.text-center(header='Variação mensal')
    b-card-text(v-bind:class='withLimitSize')
      b-table#table-transition-example(
        :items='variation'
        label-sort-asc=''
        label-sort-desc=''
        :fields='fields'
        striped=false
        class='asd'
        :tbody-transition-props='transProps')
</template>

<script>
export default {
  name: 'MonthlyVariation',
  props: {
    variation: [],
    sizeLimited: String,
  },
  data() {

    return {
      transProps: {
        name: 'flip-list',
      },
      fields: [
        { key: 'Mês', tdClass: 'text-default' },
        {
          key: 'Geral',
          sortable: true,
          tdClass: 'setAmountTdClass',
          formatter: (value, key, item) => Number(item.Geral).toFixed(2).toLocaleString('pt-br', { currency: 'BRL' }).replace('.', ',') + '%',
        },
        {
          key: 'Individual',
          sortable: true,
          tdClass: 'setAmountTdClass',
          formatter: (value, key, item) => Number(item.Individual).toFixed(2).toLocaleString('pt-br', { currency: 'BRL' }).replace('.', ',') + '%',
        },
      ],
    };

  },
  methods: {
    setAmountTdClass(value) {

      return value > 0 ? 'text-green-table' : 'text-red-table';

    },
  },
  computed: {
    withLimitSize() {

      return this.sizeLimited === 'max-size' ? 'max-size' : 'secondary-size';

    },
  },
};
</script>
<style scoped lang="scss">
  .text-center {
    color: black;
  }

  .border-radius-header {
    border-top-right-radius: 15px !important;
    border-top-left-radius: 15px !important;
  }

  td {
    padding-bottom: 15px !important;
    padding-top: 15px;
  }

  .card-header:first-child {
    border-top-right-radius: 15px;
  }

  .max-size {
    max-height: 380px;
    overflow-y: scroll;
  }

  .secondary-size {
    max-height: 590px;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2b3a54;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2b3a54;
  }

</style>
