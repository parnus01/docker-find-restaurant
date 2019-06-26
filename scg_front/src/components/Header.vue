<template>
  <header class="header">
    <!-- Navigation -->
    <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a class="navbar-brand" href="#">
        SCG Assignment
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-list-2">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" @click="goRoute('/home')">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goRoute('/number')">Number Sequence</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  @click="goRoute('/find-restaurants')">Find Restaurants</a>
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
  .bg-custom-1 {
    background-color: #85144b;
  }

  .bg-custom-2 {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  }
</style>
