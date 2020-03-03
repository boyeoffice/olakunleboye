<template lang="html">
  <div class="slide-content">
    <div v-for="(data, index) in slides" :class="[{'slide-text': true, 'active': selected === index}, data.transition]" v-html="data.text">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array
  },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    nextSlide(n = 1) {
      this.selected += n
      this.$emit('update-class', this.selected)
      if (this.selected === this.slides.length) {
					this.selected = 0
          this.$emit('update-class', 0)
				}
    }
  },
  mounted() {
    //do something after mounting vue instance
    setInterval(() => this.nextSlide(), 10000)
  }
}
</script>

<style lang="css" scoped>
  .slide-content {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    color: #fff;
  }
  .slide-content .slide-text {
    width: 100%;
    height: 100%;
    display: none;
  }
  .slide-text.active {
    display: block;
  }
</style>
