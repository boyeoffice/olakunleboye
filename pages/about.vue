<template lang="html">
  <section class="about">
    <loading @update-view="show = true" />
    <b-container v-if="show" fluid>
      <b-row>
          <b-col cols="11" md="6" lg="4"  class="content">
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
    <div class="_hr53e">
      <img src="/img/hero.svg" alt="">
    </div>
  </section>
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
        {text:'I am a self taught programmer currently working at Accede Growth, I have passion for writing code that solve problems and making web accessible to everyone... '},
        {text:'Since the beginning of my journey as a software engineer nearly 3.5 years, have done remote work for angencies, startups and collaborated with talented people to create digital products for business and consumer use.'},
      ],
      selected: 0
    }
  },
  mounted () {
  },
  methods: {
    updateClass (n) {
      if(n > 1) {
        n = 0
      }
      //this.content[this.selected].transition = 'active animated bounceOut'
      this.content[n].transition = 'animated zoomIn'
      this.selected = n
    }
  }
}
</script>
