<template>
  <div>

  </div>
</template>

<script>
import Loading from '~/components/Loading'
  export default {
    loading: false,
    components: {
      Loading
    },
    data () {
      return {
        show: false,
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 5000)
      })
    },

  }
</script>
