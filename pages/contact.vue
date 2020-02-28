<template lang="html">
  <div class="contact">
    <b-container fluid>
      <b-row>
          <b-col cols="11" md="8" lg="5"  class="content">
            <h1 class="blast-root" aria-label=" About me ">
              <blast-root :content="contact" />
            </h1>
            <p class="text-white">I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
            <div class="mt-2">
              <b-form @submit.prevent="onSubmit">
                <div class="form-group row">
                  <b-col>
                    <input type="text" class="form-control b-control" v-model="form.name" placeholder="Name" required/>
                  </b-col>
                  <b-col>
                    <input type="email" class="form-control b-control" v-model="form.email" placeholder="Email" required/>
                  </b-col>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control b-control" v-model="form.subject"  placeholder="Subject" required/>
                </div>
                <div class="form-group">
                  <textarea rows="5" v-model="form.message" class="form-control b-control" placeholder="Message" required></textarea>
                </div>
                <button type="submit" :disabled="disableButton" class="btn btn-sm">{{ buttonText }}</button>
                <span class="ml-1 text-white">
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
  import emailjs from 'emailjs-com'
  export default {
    components: {
      BlastRoot,
      FormInput
    },
    data() {
      return {
        contact: ['C','o','n','t','a','c','t'],
        form: {},
        buttonText: 'HIT ME',
        disableButton: false
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
      onSubmit(e){
        // console.log(e.target)
        this.buttonText = 'Please wait...'
        this.disableButton = true
        var template_params = {
                    from_name: this.form.name,
                    reply_to: this.form.email,
                    subject: this.form.subject,
                    message_html: this.form.message
                    };
        emailjs.send('gmail', 'template_Nb73pmI0', template_params, 'user_SdZ2PZgnf3ZniM3VVdfkA')
        .then((result) => {
          alert('Your mail is sent!')
          this.buttonText = 'HIT ME'
          this.disableButton = false
            //console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
           alert('Oops... ' + 'Something went wrong')
           this.buttonText = 'HIT ME'
           this.disableButton = false
            //console.log('FAILED...', error);
        });
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
