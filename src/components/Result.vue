<template>
  <div v-if="book[0]!=''">
    <div v-if="book[1]=='0'">
      <div class="book_card" v-for="(book,bookey) in book[0]" v-bind:key="bookey">
        <b class="book_aladin_bookname">{{book.bookname}}</b>
        <div class="book_container">
          <p class="book_aladin_bookimg"><img v-bind:src="book.imgurl"></p>
          <p class="book_aladin_bookdesc">{{book.description}}</p>
          <div class="book_aladin_result" v-if="book.result!=''">현재 <b>{{book.stores}}</b>에 재고가 존재합니다.</div>
          <div v-else>현재 재고가 없습니다.</div>
        </div>

        <ul class="book_aladin_place">
          <li v-for="(result,resultkey) in book.result" v-bind:key="resultkey">
            <p>{{result.mall}}</p>
            <ul v-for="(status,statuskey) in result.status_stock" v-bind:key="statuskey">
              <li>
                <div>{{status.location}} 위치에 {{status.quality}}급 물건이 {{status.price}} 가격으로 있습니다.</div>
              </li>
            </ul>

          </li>
        </ul>
      </div>
    </div>

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

  </div>
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
  .book_card {
    margin: 10px 15px 20px 15px;
    padding: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
    transition: 0.3s;

    background-color: white;

    max-width: 100%;
    height: auto;
    position: relative;
  }

  .book_card:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.3);
  }

  .book_container {
    padding: 10px 20px;
    display: flex;
  }

  .book_aladin_bookname {
    font-size: 24px;
  }


  /*.bookkey{
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