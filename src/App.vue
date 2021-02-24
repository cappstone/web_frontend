<template>
  <div>
    <h1>Find the book you need</h1>
    <search v-on:dataemit="dataEmit"></search>
    <result v-bind:book="emittedbook"></result>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Result from './components/Result.vue'

export default {
  data: function() {
    return {
      emittedbook:'',
    }
  },

  components: {
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
  h1{
    margin: 30px;
    text-align: center;
  }
  body{
    background-color: #bedbbb;
  }
</style>