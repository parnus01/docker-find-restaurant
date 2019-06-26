<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Type location ex: bangsue" v-model="keyword">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" v-on:click="search(keyword)">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  const searchApi = 'http://localhost:8080/api/restaurants'
  export default {
    data () {
      return {
        result: '',
        keyword: ''
      }
    },
    methods: {
      search (keyword) {
        let params = {
          keyword: keyword
        }
        axios.get(searchApi, { params })
          .then(response => {
            this.results = response.data.data
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin-top: 45px;
  }
</style>
