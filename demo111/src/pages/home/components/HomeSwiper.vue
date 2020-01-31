<template>
  <div >
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'homeHeader',
    data () {
      return {
        msg: '轮播组件'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/varibles.styl" //引入全局资源文件

</style>
