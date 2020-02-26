<template lang="html">
  <div class="contact">
    <b-container>
      <b-row>
          <b-col cols="11" md="8" lg="6"  class="content">
            <h1 class="blast-root" aria-label=" About me ">
              <blast-root :content="contact" />
            </h1>
            <p class="text-white">I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
            <div class="mt-2">
              <b-form>
                <div class="form-group row">
                  <b-col>
                    <form-input formType="text" placeHolder="Name"/>
                  </b-col>
                  <b-col>
                    <form-input formType="email" placeHolder="Email"/>
                  </b-col>
                </div>
                <div class="form-group">
                  <form-input formType="text" placeHolder="Subject" />
                </div>
                <div class="form-group">
                  <textarea rows="5" class="form-control" placeholder="Message"></textarea>
                </div>
                <button type="button" class="btn btn-sm btn-primary">HIT ME</button>
                <span>
                  or
                  <b-link href="mailto:kunlexzy@gmail.com">send me an email</b-link>
                </span>
              </b-form>
            </div>
          </b-col>
        </b-row>
      </b-container>

  </div>
</template>

<script>
  import BlastRoot from '~/components/BlastRoot'
  import FormInput from '~/components/FormInput'
  export default {
    components: {
      BlastRoot,
      FormInput
    },
    data() {
      return {
        contact: ['C','o','n','t','a','c','t'],
        form: {}
      }
    },
    created() {
      //do something after mounting vue instance
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 5000)
      })
    },
    methods: {
      Send(){
        alert('Email sent!')
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
