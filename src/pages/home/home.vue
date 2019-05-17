<template>
  <div>
    <homeheader></homeheader>
    <homeswiper :list="swiperList"></homeswiper>
    <homeicons :list="iconList"></homeicons>
    <homerecommend :list="recommendList"></homerecommend>
    <home-weekend :list="weekList"></home-weekend>
  </div>
</template>

<script>
import homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
import homerecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'home',
  components: {
    HomeWeekend,
    homerecommend,
    homeicons,
    homeheader,
    homeswiper
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
