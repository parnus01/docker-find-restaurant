<template>
  <div class="main">
    <section id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1 class="section-heading text-uppercase">3, 5, 9, 15, X, Y, Z</h1>
            <h2 class="section-heading text-uppercase">What is X, Y, Z ?</h2>
            <h3 class="section-subheading text-muted">view answer press button</h3>
          </div>
        </div>
        <div class="row text-center">
          <div v-if="isShowAnswer === false" class="col-lg-12 center-block">
            <button type="button" class="btn btn-lg btn-danger"
                    v-on:click="showAnswer">VIEW ANSWER
            </button>
          </div>
          <div v-else class="col-lg-12 center-block">
              <b>{{ answer}}</b>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShowAnswer: false,
        answer: '23 33 45'
      }
    },
    mounted () {
      $('.page-alert').hide()
    },
    methods: {
      showAnswer () {
        this.isShowAnswer = !this.isShowAnswer
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
