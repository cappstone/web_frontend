<template>
  <ul v-if="book[1]=='0'">
    <li v-for="key in book[0]" v-bind:key="key">
      <b>{{key.bookname}}</b>
      <p><img v-bind:src="key.imgurl"></p>
      <p>{{key.description}}</p>
      <div v-if="key.result!=''">현재 <b>{{key.stores}}</b>에 재고가 존재합니다.</div>
      <div v-else>현재 재고가 없습니다.</div>

      <ol>
        <li v-for="resultkey in key.result" v-bind:key="resultkey">
          <p>{{resultkey.mall}}</p>
          <div>현재{{resultkey.count_stock}}개</div>

          <ol v-for="statuskey in resultkey.status_stock" v-bind:key="statuskey">
            <li>
              <div>{{statuskey.location}} 위치에 {{statuskey.quality}}급 물건이 {{statuskey.price}} 가격으로 있습니다.</div>
            </li>
          </ol>

        </li>
      </ol>

      <br>
    </li>
  </ul>

  <ul v-else>
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
    }
}
</script>

<style>

</style>