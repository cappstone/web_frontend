<template>
  <div class="search">
    <input v-on:keyup="checkEntered" v-model="searchname" placeholder="책이름">
    <button v-on:click="getData"><font-awesome-icon icon="bullseye-pointer"/></button>
    <div class="radio">
      <tbody>
        <tr>
          <td>
            <input type="radio" id="aladin" value="0" v-model="searchstore">
          </td>
          <td>
            <div>Aladin</div>
          </td>
          <td>
            <input type="radio" id="yes" value="1" v-model="searchstore">
          </td>
          <td>
            <div>Yes24</div>
          </td>
        </tr>
      </tbody>
    </div>
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
  .search{
    height: 50px;
    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
    display: inline-block;
  }
  .search input{
    height: 30px;
    width: 80%;
    border: 3px solid #8db596;
    border-radius: 6px;
    text-align: left;
    font-size: 24px;
    position: relative;
    left: 20px;
  }
  .search button{
    height: 30px;
    width: 12%;
    text-align: center;
    border: 3px solid white;
    border-radius: 6px;
    margin-top: 5px;
    color: black;
    background: #8db596;
    font-size: 20px;
    float: right;
    top: 3px;
  }

  .radio{
    margin-top: 10px;
    width: 30%;
    float: right;
    font-size: 20px;
    border: 3px bold #8db596;
    background: #8db596;
    border-radius: 20px;
    color: white;
  }
  .radio label{
    margin-left: 5px;
  }

  #a:hover, #y:hover{
    cursor: pointer;
  }
</style>