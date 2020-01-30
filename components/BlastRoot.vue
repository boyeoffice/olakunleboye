<template>
  <span>
    <span v-for="(text, index) in content" 
          @mouseover="onMouseOver(index)"  
          :class="{'blast': true, 'animated bounceIn': bounceIn, 'animated rubberBand': selected === index}" :key="index">
    {{text}}</span>
  </span>
</template>

<script>
  export default {
    props: {
      content: Array
    },
    data() {
     return {
       selected: null,
       bounceIn: true
     }
    },
    mounted() {
      setTimeout(() => {
        this.bounceIn = false
      }, 1000)
    },
    methods: {
      onMouseOver(index) {
        this.selected = index
        setTimeout(() => {
          this.selected = null
        }, 1000)
      }
    }
  }
</script>