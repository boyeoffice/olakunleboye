<template lang="html">
  <div class="skills">
    <loading @update-view="show = true" />
    <b-container class="animated zoomIn" v-if="show" fluid>
      <b-row>
          <b-col cols="11" md="6"  class="content">
            <h1 class="blast-root" aria-label=" About me ">
              <blast-root :content="skills" />
              <blast-root :content="and" /><br />
              <blast-root :content="exp" />
            </h1>
            <div class="mt-4">
              <carousel @update-class="updateClass" :slides="content" />
            </div>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
  import BlastRoot from '~/components/BlastRoot'
  import Carousel from '~/components/CarouselSlideUp'
  import Loading from '~/components/Loading'
  export default {
    head: {
      title: 'Skills & Experience | Full Stack Developer'
    },
    components: {
      BlastRoot,
      Carousel,
      Loading
    },
    data() {
      return {
        skills: ['S','k','i','l','l','s'],
        and: ['&'],
        exp: ['E','x','p','e','r','i','e','n','c','e'],
        content: [
          {text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 0 '},
          {text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1'},
          {text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2 '},
          {text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 3'}
        ],
        show: false
      }
    },
    mounted () {

    },
    methods: {
      updateClass (n) {
        if(n > 3) {
          n = 0
        }
        //this.content[this.selected].transition = 'active animated bounceOut'
        this.content[n].transition = 'animated slideInUp'
        //this.selected = n
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
