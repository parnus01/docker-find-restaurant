<template>
  <header class="header">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" @click="goRoute('/home')">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goRoute('/number')">Number Sequence</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  @click="goRoute('/find-restaurants')">Find Restaurants</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goRoute (path) {
        this.$router.push({ path: path })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
