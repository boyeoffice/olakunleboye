<template lang="html">
  <div class="about">
    <loading @update-view="show = true" />
    <b-container v-if="show" fluid>
      <b-row>
          <b-col cols="11" md="6"  class="content">
            <h1 class="blast-root" aria-label=" About me ">
              <blast-root :content="about" />
              <blast-root :content="me" />
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
import Loading from '~/components/Loading'
import Carousel from '~/components/CarouselSlideUp'
export default {
  head: {
    title: 'About me | Full Stack developer',
    meta: [
      {property: "og:url", content: "http://olakunleboye.com/about/"},
      {name: "twitter:title", content: "About me | Fullstack Developer | WordPress Expert - Freelancer" },
    ],
    link: [
      {rel: "canonical", url: "http//olakunleboye.com"}
    ]
  },
  components: {
    BlastRoot,
    Loading,
    Carousel
  },
  data() {
    return {
      about: ['A','b','o','u','t'],
      me: ['m','e'],
      show: false,
      content: [
        {text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 0 '},
        {text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.1'},
        {text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2 '},
        {text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 3'}
      ],
      selected: 0
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
      this.content[n].transition = 'animated zoomIn'
      this.selected = n
    }
  }
}
</script>
