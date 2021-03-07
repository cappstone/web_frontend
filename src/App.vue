<template>
  <div>
    <header/>
    <search v-on:dataemit="dataEmit"></search>
    <br><br><br><br><br>
    <result v-bind:book="emittedbook"></result>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Result from './components/Result.vue'

export default {
  data: function() {
    return {
      emittedbook:'',
    }
  },

  components: {
    header: Header,
    search: Search,
    result: Result,
  },

  methods: {
    dataEmit: function(value) {
      this.emittedbook=value;
      //console.log(this.emittedbook);
    }
  }
}
</script>

<style>

</style>