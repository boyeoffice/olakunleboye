<template lang="html">
  <div v-show="show" class="preloader bg-dark">
    <div class="inner">
      <img src="/img/cooltext349167867806161.png" alt="Olakunle Boye">
  		<img src="/img/349168519845770.png" alt="Olakunle Boye" style="width: 27px;">
      <span>Olakunle is thinking</span>
      <b-progress variant="secondary" height="2px" :value="percent"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 0,
      duration: 1000,
      show: false
    }
  },
  mounted(){
    this.start()
  },
  methods: {
    start() {
      this.show = true
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if(this.percent > 95) {
          this.finish()
        }
      }, 100);
      return
    },
    increase(num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    finish() {
      this.percent = 100
      this.hide()
      return this
    },
    hide() {
      clearInterval(this._timer)
      this._timer = null
      this.show = false
      setTimeout(() => this.percent = 0, 200)
      return this
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
