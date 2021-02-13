<template>
  <div id="app">
    <button v-on:click="getData">가져오기</button>
    <div>{{book}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  el: '#app',
  data:function(){return {book:[]}},
  methods: {
    getData: function() {
      var vue = this;
      axios.get('http://sc0nep.iptime.org:8000/search?word=Vue.js&mode=0')
        .then(function(response) {
          console.log(response.data);
          vue.book = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>