<template lang="html">
  <div class="skills">
    <loading @update-view="show = true" />
    <b-container class="animated zoomIn" v-if="show" fluid>
      <b-row>
          <b-col cols="11" md="5"  class="content">
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
          {text:'I have over 3 years exprience working as a full-stack developer, both Freelance and Remote. Over the years, have used open source CMS like wordpress...'},
          {text:'I enjoy working with  this popular editors(Sublime, Atom and Vscode). <br/> Strong database knowledge in Mysql, Postgresql and Mongodb. <br/> Extensive knowledge of serverless and lambda function...'},
          {text:'Proficient in PHP, Laravel, NodeJS, VueJS, ExpressJS and Codeigniter. <br/> Experienced using unit test and Mocha for testing...'},
          {text:'Clean, modern designs - optimized for performance, search engines and conversting users tp customers.<br/> Familiar with Apache and Nginx.'}
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
