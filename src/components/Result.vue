<template>
  <ul v-if="books[1]=='0'">
    <li v-for="(book,key) in books[0]" v-bind:key="key">
      <b>{{book.bookname}}</b>
      <p><img v-bind:src="book.imgurl"></p>
      <p>{{book.description}}</p>
      <div v-if="key.result!=''">현재 <b>{{book.stores}}</b>에 재고가 존재합니다.</div>
      <div v-else>현재 재고가 없습니다.</div>

      <ol>
        <li v-for="(result,resultkey) in key.result" v-bind:key="resultkey">
          <p>{{result.mall}}</p>
          <div>현재{{result.count_stock}}개</div>

          <ol v-for="(status,statuskey) in resultkey.status_stock" v-bind:key="statuskey">
            <li>
              <div>{{status.location}} 위치에 {{status.quality}}급 물건이 {{status.price}} 가격으로 있습니다.</div>
            </li>
          </ol>

        </li>
      </ol>

      <br>
    </li>
  </ul>

  <ul v-else-if="books[1]=='1'">
    <li v-for="(book,key) in books[0]" v-bind:key="key">
      <p><b>{{book.mall}}</b>에 대한 정보입니다..</p>
      <ol v-for="(result,resultkey) in book.result" v-bind:key="resultkey">
        <li v-if="result!='검색 결과 없음'">
          <b>{{result.bookname}}</b>
          <p>{{result.description}}</p>
          <div>{{result.location}}이 {{result.price}} 가격으로 있습니다.</div>
        </li>
        <li v-else>
          <div>현재 재고가 없습니다.</div>
        </li>
      </ol>
    </li>
  </ul>

  <div v-else>매장을 선택해 주세요.</div>
</template>

<script>
export default {
    props:['books'],

    methods:{
    }
}
</script>

<style>

</style>