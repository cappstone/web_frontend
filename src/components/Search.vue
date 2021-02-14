<template>
  <div>
    <input v-on:keyup="checkEntered" v-model="bookname" placeholder="책이름">
    <button v-on:click="getData">가져오기</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data:function(){return {bookname:'', bookurl:'', book:''}},

  methods: {
    checkEntered: function() {
      if(window.event.keyCode == 13) {
        this.getData();
      }
    },
    getData: function() {
      var vue = this;
      vue.bookurl='http://sc0nep.iptime.org:8888/search?word='+String(vue.bookname)+'&mode=0'
      axios.get(vue.bookurl)
        .then(function(response) { 
          //console.log(response.data);
          //vue.display(response.data);
          vue.book=response.data;
          vue.$emit('dataemit',vue.book);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /*display: function(data) {
      console.log(data[0].description)
    }아직 안쓸거-SY02에서 사용*/
  }
}
</script>

<style>

</style>