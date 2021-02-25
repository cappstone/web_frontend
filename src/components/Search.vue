<template>
  <div>
    <input v-on:keyup="checkEntered" v-model="searchname" placeholder="책이름">
    <button v-on:click="getData">가져오기</button>
    <input type="radio" id="aladin" value="0" v-model="searchstore">
    <label for="aladin">Aladin</label>
    <input type="radio" id="yes" value="1" v-model="searchstore">
    <label for="yes">YES24</label>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data:function(){return {searchname:'',searchstore:'0',searchurl:'', search:''}},

  methods: {
    checkEntered: function() {
      if(window.event.keyCode == 13) {
        this.getData();
      }
    },
    getData: function() {
      var vue = this;
      vue.searchurl='http://sc0nep.iptime.org:8888/search?word='+String(vue.searchname)+'&mode='+String(vue.searchstore)
      axios.get(vue.searchurl)
        .then(function(response) { 
          //console.log(response.data);
          vue.display(response.data);
          vue.search=response.data;
          if (vue.search==''){console.log("찾는 데이타가 없습니다")}
          vue.$emit('dataemit',[vue.search,vue.searchstore]);
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