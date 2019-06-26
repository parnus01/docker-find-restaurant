<template>
  <div class="main">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Footer
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    min-height: 600px;
  }
</style>
