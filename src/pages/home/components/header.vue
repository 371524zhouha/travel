<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6a8;</span>
      输入城市/景点/主题
    </div>
    <router-link to="/city">
      <div class="header-right">{{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    background $bgColor
    color #fff
    line-height $headerHeight
    .header-left
      width .64rem
      flex left
      .back-icon
        text-align center
        font-size 0.4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top 0.12rem
      margin-left 0.2rem
      padding-left 0.2rem
      background #fff
      color #eaeaea
      border-radius 0.1rem
      /*text-align center*/
    .header-right
      min-width 1.04rem
      padding 0.1rem
      flex right
      color: #fff
      text-align center
      .arrow-icon
        margin-left -0.04rem
        font-size 0.24rem

</style>
  <!--1rem = html font-size =50px-->
