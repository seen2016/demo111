<template>
  <div class="header">
    <!--<h1>{{ msg }}</h1>-->
    <div class="header-left">
      <div class="iconfont back-icon">&#xe627;</div>
    </div>
    <div class="header-center">
      <span class="iconfont" >&#xe60b;</span>
      请输入要搜索的内容
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon" >&#xe60e;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeHeader',
    data () {
      return {
        msg: '这里是头部区域'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgcolor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size: .4rem
    .header-center
      flex: 1
      background: #fff
      color: #ccc
      border-radius: .1rem
      line-height: .64rem
      padding-left .12rem
      margin-top .12rem
      margin-left .2rem
      height .64rem
    .header-right
      width: 1.24rem
      margin-left .12rem
      float: right
      text-align center
      .arrow-icon
        font-size .4rem
        margin-left -0.02rem
</style>
