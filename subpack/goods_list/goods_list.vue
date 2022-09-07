<template>
  <view>
    <van-card :thumb-link="`/subpack/goods_details/goods_details?id=${item.goods_id}`" v-for="item in goods"
      :key="item.goods_id" :price="item.goods_price | filters" :title="item.goods_name"
      :thumb="item.goods_big_logo || defaultPic" />
  </view>
</template>

<script>
  import {
    getGoodsList
  } from '@/api/goods.js'
  import toasts from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        total: 0,
        goods: [],
        isLoading: false,
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      async loadGoodsList(stopPullDown) {
        this.isLoading = true
        const {
          total,
          goods
        } = await getGoodsList(this.queryData)
        this.isLoading = false
        this.total = total
        this.goods = [...this.goods, ...goods]
        stopPullDown && stopPullDown()
      }

    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.loadGoodsList()
    },
    onPullDownRefresh() {
      this.queryData = {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
      }
      this.total = 0
      this.goods = []
      this.loadGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toasts('没有更多数据了')
      if (this.isLoading) return
      this.queryData.pagenum++
      this.loadGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
