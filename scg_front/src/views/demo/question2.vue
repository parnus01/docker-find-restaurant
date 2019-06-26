<template>
  <section class="page-module">
    <div class="module-header">
      <h3>Find Restaurants</h3>

    </div>
    <div class="module-content">
      <el-input placeholder="Type location ex: bangsue" v-model="keyword" >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </section>
</template>

<script>
import EditDialog from './EditDialog'

export default {
  name: 'DemoList',

  props: {
  },

  data () {
    return {
      keyword: ''
    }
  },

  components: {
    EditDialog
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  filters: {},

  methods: {

  }
}
</script>

<style lang="scss">
@import './../../assets/scss/variables.scss';
@import './../../assets/scss/mixins.scss';

.module-content{
  .table-operate{
    margin-top: 15px;
  }

}
</style>
