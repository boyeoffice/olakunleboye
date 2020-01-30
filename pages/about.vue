<template>
  <div class="container about">
    <div class="content">
      <h1 class="blast-root" aria-label=" About me ">
        <blast-root :content="about" />
        <blast-root :content="me" />
      </h1>
      <p class="LEFT">
        Professionally connected with the web development industry and information technology for many years.
      </p>
      <img src="/img/timeline.png" style="max-width: 95%; margin-top: 40px;" alt="">
      <div class="clear"></div>
    </div>
    <section id="pyramid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>

<script>
import BlastRoot from '~/components/BlastRoot'
export default {
  loading: false,
  head: {
    title: 'About me | Full Stack developer'
  },
  components: {
    BlastRoot
  },
  data() {
    return {
      about: ['A','b','o','u','t'],
      me: ['m','e']
    }
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
       // this.$nuxt.$loading.finish()
        resolve({})
      }, 1000)
    })
  },
  mounted () {
    setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish()
    }, 1000)
  },
  methods: {
   /* goToFinal () {
      // Start loader immediately
      this.$nuxt.$loading.start()
      // Actually change route 5s later
      setTimeout(() => {
        this.$router.push('/final')
      }, 5000)
    }*/
  }
}
</script>
