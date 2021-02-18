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
          vue.display(response.data);
          vue.book=response.data;
          if (vue.book==''){console.log("찾는 데이타가 없습니다")}
          vue.$emit('dataemit',vue.book);
        })
        .catch(function(error) {
          console.log('error');
        });
    },
    display: function(data) {
      for(var key in data){
        console.log(data[key].bookname);
        for(var resultkey in data[key].result){
          console.log(data[key].result[resultkey].count_stock+"개의 책이"+data[key].result[resultkey].mall+"에 있습니다");
        }
      }
    }
  }
}
</script>

<style>

</style>