<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showswiper">
      <swiper-slide class="swiper-slide" v-for="item of list" :key="item.id">
        <img height="92" class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeswiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        speed: 1000,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showswiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background white
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 22.32%
    background #eaeaea
    .swiper-img
      width 100%
</style>
