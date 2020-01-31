<template>
  <div >
    <home-header></home-header>
    <home-swiper></home-swiper>
    <!--<h1>{{ msg }}</h1>-->
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue'
  import HomeSwiper from './components/HomeSwiper.vue'
  export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeSwiper
    },
    data () {
      return {
        msg: 'homePage'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
