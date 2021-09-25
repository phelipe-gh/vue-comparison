<template lang='pug'>

  div.app
    router-view

</template>
<script>
import Navbar from './components/Navbar.vue';
import LineGraph from './components/LineGraph.vue';
import PriceGraph from './components/PriceGraph.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    LineGraph,
    PriceGraph,
  },
};
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
