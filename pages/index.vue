<template>
  <div class="home-page">
    <loading @update-view="show = true" />
    <div v-if="show">
    <b-container fluid class="animated zoomIn">
      <b-row class="">
        <b-col cols="11" md="8"  class="content">
          <h1 class="blast-root">
            <blast-root :content="first" /><br/>
            <blast-root :content="second" />
            <img src="/img/cooltext349167867806161.png" alt="" class="animation-logo"><blast-root :content="third" style="opacity: 1;" /><br/>
            <blast-root :content="fourth" />
            <blast-root :content="fifth" />
          </h1>
          <h2>
            Full Stack Developer / Freelancer
          </h2>
          <nuxt-link class="flat-button animated rubberBand" to="/contact">CONTACT ME</nuxt-link>
        </b-col>
      </b-row>
    </b-container>
    <div class="pic-bg" :style="{backgroundImage: 'url(' + avatar + ')'}"></div>
  </div>
</div>
</template>

<script>
import Loading from '~/components/Loading'
import BlastRoot from '~/components/BlastRoot'
  export default {
    components: {
      Loading,
      BlastRoot
    },
    asyncData () {
      return new Promise((resolve) => {
         resolve({
          show: false,
          first: ['H', 'i', ','],
          second: ['I', '’', 'm'],
          third: ['o','y','e', ','],
          fourth: ['w','e','b'],
          fifth: ['d','e','v','e','l','o','p','e','r', '.'],
          avatar: ''
        })
      })
    },
    created () {
      this.$nextTick(() => {
        this.avatar = '/img/PicsArt_1435780508022.jpg'
      })
    },

  }
</script>
