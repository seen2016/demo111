<template>
  <div >
    <!--<h1>{{ msg }}</h1>-->
    <swiper class="wrapper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img"
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"/>
      </swiper-slide>
      <swiper-slide><img class="swiper-img"
        src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg"/>
      </swiper-slide>
<!--      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>-->

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
    <div>test</div>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    data () {
      return {
        msg: '轮播组件',
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true

        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl" //引入全局资源文件
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
    margin: 0 4px
  .wrapper
    overflow: hidden
    width 100%
    height 0
    padding-bottom 26.5%
    background #333333
    .swiper-img
      width 100%
</style>
