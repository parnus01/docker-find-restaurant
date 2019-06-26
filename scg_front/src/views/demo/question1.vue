<template>
  <section class="page-module">
    <div class="module-header">
      <h3>Number Sequence</h3>
    </div>
    <div class="module-content">
      <div class="question-title">
        <h3>3, 5, 9, 15, X, Y, Z </h3>
        <p>What is X, Y, Z ?</p>
        <el-button type="text" @click="open">Click to see answer</el-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Question-1',

  components: {},

  props: {
  },

  data () {
    return {

    }
  },

  computed: {},

  watch: {},

  created () {
  },

  mounted () {
  },

  filters: {},

  methods: {
    open() {
      this.$alert('23 33 45', 'Answer', {
        confirmButtonText: 'OK'
      })
    }
  }
}
</script>
<style scoped lang="scss">
   .question-title{
    p{
      margin-top: 20px;
      }
   }
</style>
