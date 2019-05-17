<template>
  <div>
    <detail-banner :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <detail-discuss :gallaryImgs="gallaryImgs"></detail-discuss>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
import DetailDiscuss from './components/discuss'
export default {
  name: 'Detail',
  components: {DetailDiscuss, DetailBanner, DetailHeader, DetailList},
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 3rem
    /*background #000*/
</style>
