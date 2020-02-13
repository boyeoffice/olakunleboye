<template>
  <div>
    <div class="container home-page">
    <div class="content">
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
    </div>
  </div>
  <div class="pic-bg" :style="{backgroundImage: 'url(' + avatar + ')'}"></div>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
import BlastRoot from '~/components/BlastRoot'
export default {
  loading: false,
  components: {
    Loading,
    BlastRoot
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        //this.$nuxt.$loading.finish()
        resolve({ avatar: '/img/PicsArt_1435780508022.jpg' })
      }, 1000)
    })
  },
  mounted () {
    this.$nuxt.$loading.finish
    setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish()
    }, 1000)
  },
  data: () => ({
    first: ['H', 'i', ','],
    second: ['I', '’', 'm'],
    third: ['o','y','e', ','],
    fourth: ['w','e','b'],
    fifth: ['d','e','v','e','l','o','p','e','r', '.']
  })

}
</script>
