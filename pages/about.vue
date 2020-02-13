<template>
  <div class="container about">
    <div class="content">
      <h1 class="blast-root" aria-label=" About me ">
        <blast-root :content="about" />
        <blast-root :content="me" />
      </h1>
      <p class="LEFT">
        A self taught programmer who have passion for writing code that solve problems.
      </p>
      <p class="LEFT">
        Well-organised person, problem solver, remote developer with high to attention to detail.
        Professionally worked with quiet number of clients both in Nigeria and abroad.
      </p>
      <p class="LEFT">
        I love exploring new technologies and often amazed by the progress we as a human species have made so far in the recent years.
         Also love watching SCI-FI movies.
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
