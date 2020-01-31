<template>
  <div >
    <home-header></home-header>
    <!--<h1>{{ msg }}</h1>-->
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue'
  export default {
    name: 'HomePage',
    components: {
        HomeHeader
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
