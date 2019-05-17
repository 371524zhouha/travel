<template>
    <div class="comment">
      <div class="comment-totle border-bottom">
        用户评论
      </div>
      <div class="conmment-one border-bottom">
        <div class="comment-userInfo border-bottom">
          <span class="iconfont">
            &#xe609;&#xe609;&#xe609;&#xe609;&#xe609;</span>
          <span class="user">jk***5 2019-04-29</span>
        </div>
        <div class="comment-content" :style="overflowStyle">
          在这次旅行中我要着重讲一下导游李晶晶，小李从昨晚就聯系我們告訴了我们要乘车的地点、時間以及游
          玩须要准备的东西（身份证等），今天一早当我們到达乘车地并准备要发车时，我們发現身份证沒帶，我們当时就要下年不去了（因為沒有身份证进不了园），这時小李非常耐心的叫我们跟车去，她馬上联系相关单位处理这事，到达世园会后，小李
          不厌其烦来回奔波与园会方协商，终于补打了我們的临时入园票，让我们可以順利的进行旅程。在此我們感謝小李的职业精神及优质的服务👍让我们有了一个非常愉快的旅行😃謝謝🙏小李
          <p class="iconfont showUp" @click="showUp">&#xe624;</p>
        </div>
        <div class="comment-foldbtn">
          <span v-show="showDown" @click="showElse" class="iconfont">&#xe62d;</span>
        </div>
        <div class="comment-imgs">
          <div class="banner" @click="handleBannerClick">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <div class="banner" style="display:none;">
            <div class="icon-img">
              <img class="img-content"
              src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20194/021d10b4c32d92d5f655adcc98d8ecef.jpg_228x168_236fd1b7.jpg">
            </div>
          </div>
          <fade>
            <common-gallary :imgs="gallaryImgs" v-show="showGallary"
              @close="handleGallaryClose"></common-gallary>
          </fade>
              </div>
      </div>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import Fade from 'common/fade/fade'
export default {
  name: 'DetailDiscuss',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      showDown: true,
      overflowStyle: {
        overflow: 'hidden',
        height: '2.1rem'
      },
      showGallary: false
    }
  },
  methods: {
    showElse () {
      this.showDown = false
      this.overflowStyle = {
        overflow: 'inherit',
        height: 'auto'
      }
    },
    showUp () {
      this.showDown = true
      this.overflowStyle = {
        overflow: 'hidden',
        height: '2.1rem'
      }
    },
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary, Fade
  }
}
</script>

<style lang="stylus" scoped>
  .comment
    position relative
    top .06rem
    left 0
    right 0
    bottom 0.06rem
    padding 0 0.2rem
    .comment-totle
      line-height 0.8rem
      padding 0 0.2rem
      font-size 0.32rem
    .conmment-one
      padding 0.1rem 0 0.3rem 0
      position: relative
      .comment-userInfo
        padding 0 0 0.3rem 0
        .iconfont
          position: relative;
          top: .16rem;
          width 100%
          color #ffb436
        .user
          position: relative;
          float: right;
          top: .16rem;
          margin-left: .2rem;
          line-height: .28rem;
          font-size: .24rem;
          vertical-align: middle;
          color: #212121;
      .comment-content
        height 2.1rem
        overflow hidden
        word-break: break-all;
        word-wrap: break-word;
        line-height: .42rem;
        font-size: .26rem;
        color: #616161
        .showUp
          text-align: center;
          height: .48rem;
          line-height: .48rem;
          font-size: .26rem;
          color: #9e9e9e;
      .comment-foldbtn
        text-align: center;
        height: .48rem;
        line-height: .48rem;
        font-size: .26rem;
        color: #9e9e9e;
      .comment-imgs
        margin-top: .1rem;
        height: 193.4px;
        .banner
          position relative
          float left
          padding-bottom 24.5%
          width 33%
          .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom 0.04rem
            box-sizing border-box
            padding 0 0.05rem
            .img-content
              width 100%;
</style>
