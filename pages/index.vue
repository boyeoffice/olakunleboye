<template>
  <div class="container home-page">
    <div class="content">
      <h1 class="blast-root">
        <span v-for="(text, index) in first" class="blast">{{text}}</span><br/>
        <span v-for="(text, index) in second" class="blast">{{text}}</span>
        <img src="/img/logo.png" alt="" class="amination-logo"><span v-for="(text, index) in third" class="blast">{{text}}</span><br/>
        <span v-for="(text, index) in fourth" class="blast">{{text}}</span>
        <span v-for="(text, index) in fifth" class="blast">{{text}}</span>
      </h1>
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading'
export default {
  components: {
    Loading
  },
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'world' })
      }, 1000)
    })
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
