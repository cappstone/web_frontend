<template>
  <div id="app">
    <button v-on:click="getData">가져오기</button>
    <div>{{users}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  el: '#app',
  data:function(){return {users:[]}},
  methods: {
    getData: function() {
      var vue = this;
      axios.get('http://sc0nep.iptime.org:8000/search?word=다빈치코드&mode=0')
        .then(function(response) {
          console.log(response.data);
          vue.users = response.data;
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