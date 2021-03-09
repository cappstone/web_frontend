<template>
  <ul id="aladin" v-if="book[1]=='0'">
    <li class="bookkey" v-for="key in book[0]" v-bind:key="key">
      <b>{{key.bookname}}</b>
      <p><img v-bind:src="key.imgurl"></p>
      <p>{{key.description}}</p>
      <div v-if="key.result!=''">현재 <b>{{key.stores}}</b>에 재고가 존재합니다.</div>
      <div v-else>현재 재고가 없습니다.</div>

      <ul class="place">
        <li v-for="resultkey in key.result" v-bind:key="resultkey">
          <p>{{resultkey.mall}}</p>
          <div>현재{{resultkey.count_stock}}개</div>
          <ul v-for="statuskey in resultkey.status_stock" v-bind:key="statuskey">
            <li>
              <div>{{statuskey.location}} 위치에 {{statuskey.quality}}급 물건이 {{statuskey.price}} 가격으로 있습니다.</div>
            </li>
          </ul>

        </li>
      </ul>

      <br>
    </li>
  </ul>

  <ul id="yes" v-else>
    <li v-for="key in book[0]" v-bind:key="key">
      <p><b>{{key.mall}}</b>에 다음 책이 존재합니다.</p>
      <ol v-for="resultkey in key.result" v-bind:key="resultkey">
        <li v-if="resultkey!='검색 결과 없음'">
          <b>{{resultkey.bookname}}</b>
          <p>{{resultkey.description}}</p>
          <div>{{resultkey.location}}이 {{resultkey.price}} 가격으로 있습니다.</div>
        </li>
        <li v-else>
          <div>현재 재고가 없습니다.</div>
        </li>
      </ol>
    </li>
  </ul>
</template>

<script>
export default {
    props:['book'],

    methods:{
      /**$(document).ready(function(){
        $('.more').click(function(){
          if($('.more').hasClass('more')){
            $('.more').addClass('close').removeClass('more');
            $('.more').addClass('close').removeClass('more');
          }
          else if($('.close').hasClass('close')){
            $('.close').addClass('more').removeClass('close');
            $('.more').addClass('close').removeClass('more');
          }
        });
      });*/
    }
}
</script>

<style>
  .bookkey{
    background: #bedbbb;
    text-align: left;
    font-size: 36px;
    font-weight: bold;
    color: #707070;
    line-height: -46px;
    }
  .bookkey p{
    text-align: center;
  }
  .bookkey p + p{
    color: #92817a;
    font-size: 24px;
    text-align: center;
  }
  .bookkey div{
    color: #92817a;
    font-size: 18px;
    text-align: center;
  }

  .place{
    display: block;
    font-size: 24px;
    text-align: left;
  }

  .place ul{
    display: block;
    font-size: 18px;
    text-align: left;
  }
  /**.m1{
    left: 7%;
    position: absolute;
  }
  .b1{
    display: block;
    font-size: 28px;
    text-align: left;
    clip: auto;
  }
  .place li{
    position: absolute;
    visibility: hidden;
  }
  .m1:hover, .m2:hover{
    cursor: pointer;
  }
  .place p{
    font-size: 30px;
    text-align: justify;
  }
  .b2{
    position: absolute;
    list-style-type: square;
  } */
</style>