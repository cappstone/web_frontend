<template>
  <div>
    <h1>보고싶은 책 쓰고 가져오기 누르면 가져와져요</h1>
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

</style>