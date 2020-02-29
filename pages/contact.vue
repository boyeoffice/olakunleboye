<template lang="html">
  <div class="contact">
    <b-container fluid>
      <b-row>
          <b-col cols="12" md="8" lg="5"  class="content">
            <h1 class="blast-root" aria-label=" About me ">
              <blast-root :content="contact" />
            </h1>
            <p class="text-white">I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
            <div class="mt-2 mb-5">
              <b-form @submit.prevent="onSubmit">
                <div class="row">
                  <b-col cols="12" md="6" class="form-group">
                    <input type="text" :class="{'form-control b-control animated fadeInUp': true, 'is-invalid': !!errors.name }" v-model="form.name" placeholder="Name"/>
                  </b-col>
                  <b-col cols="12" md="6" class="form-group">
                    <input type="email" :class="{'form-control b-control animated fadeInUp': true, 'is-invalid': !!errors.email }" v-model="form.email" placeholder="Email" />
                  </b-col>
                </div>
                <div class="form-group">
                  <input type="text" :class="{'form-control b-control animated fadeInUp': true, 'is-invalid': !!errors.sub }" v-model="form.subject"  placeholder="Subject" />
                </div>
                <div class="form-group">
                  <textarea rows="5" v-model="form.message" :class="{'form-control b-control animated fadeInUp': true, 'is-invalid': !!errors.msg}" placeholder="Message" ></textarea>
                </div>
                <button type="submit" :disabled="disableButton" class="btn btn-sm animated fadeInUp">{{ buttonText }}</button>
                <span class="ml-1 text-white animated fadeInUp">
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

  const validateName = name => {
    if (!name.length) {
      return { valid: false, error: "This field is required" }
    }
    return { valid: true, error: null }
  }

  const validateEmail = email => {
    if (!email.length) {
      return { valid: false, error: "This field is required" }
    }
    /*if (!email.match(/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/)) {
      return { valid: false, error: "Please, enter a valid email" }
    }*/
    return { valid: true, error: null }
  }

  const validateSubject = sub => {
    if (!sub.length) {
      return { valid: false, error: "This field is required" }
    }
    return { valid: true, error: null }
  }

  const validateMsg = msg => {
    if (!msg.length) {
      return { valid: false, error: "This field is required" }
    }
    return { valid: true, error: null }
  }

  const validatePassword = password => {
  if (!password.length) {
    return { valid: false, error: "This field is required" };
  }
  if (password.length < 7) {
    return { valid: false, error: "Password is too short" };
  }
  return { valid: true, error: null };
}

const validatePhone = phone => {
  if (!phone.length) {
    return { valid: false, error: 'This field is required.' };
  }

  if (!phone.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)) {
    return { valid: false, error: 'Please, enter a valid international phone number.' };
  }

  return { valid: true, error: null };
}

  export default {
    components: {
      BlastRoot,
      FormInput
    },
    data() {
      return {
        contact: ['C','o','n','t','a','c','t'],
        form: {
          name: '',
          subject: '',
          email: '',
          message: ''
        },
        buttonText: 'HIT ME',
        disableButton: false,
        errors: {},
        valid: true,
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
      async onSubmit(e){
        // console.log(e.target)
        // this.checkError()
        this.buttonText = 'Please wait...'
        this.disableButton = true
        this.errors = {}
        this.valid = true
        const validName = await validateName(this.form.name)
        this.errors.name = validName.error
        if (this.valid) {
          this.valid = validName.valid
        }
        const validEmail = await validateEmail(this.form.email)
        this.errors.email = validEmail.error
        if (this.valid) {
          this.valid = validEmail.valid
        }
        const validSub = await validateSubject(this.form.subject)
        this.errors.sub = validSub.error
        if (this.valid) {
          this.valid = validSub.valid
        }
        const validMsg = await validateMsg(this.form.message)
        this.errors.msg = validMsg.error
        if (this.valid) {
          this.valid = validMsg.valid
        }
        if (!this.valid) {
          this.buttonText = 'HIT ME'
          this.disableButton = false
          return
        }

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
          this.clearForm()
            //console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
           alert('Oops... ' + 'Something went wrong')
           this.buttonText = 'HIT ME'
           this.disableButton = false
            //console.log('FAILED...', error);
        });
      },
      checkError() {
        this.form = {
          name: '',
          subject: '',
          email: '',
          message: ''
        }
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
