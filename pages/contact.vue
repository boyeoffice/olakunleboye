<template>
  <div class="container contact">
    <div class="content">
      <h1 class="blast-root">
        <blast-root :content="contact" />
      </h1>
      <p>I am interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using below form either.</p>
      <p></p>
      <div class="contact-form">
        <form @submit.prevent="Send" id="contact" autocomplete="off">
          <ul><li class="half animated fadeInUp"> 
          <input class="input__field input__field--hoshi" placeholder="Name" type="text" name="name"> 
          <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
          <li class="half animated fadeInUp"> 
          <input class="input__field input__field--hoshi" placeholder="Email" type="email" name="email">
           <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
           <li class="animated fadeInUp"> 
           <input class="input__field input__field--hoshi" placeholder="Subject" type="text" name="subject"> 
           <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
           <li class="animated fadeInUp">
           <textarea class="input__field input__field--hoshi" placeholder="Message" name="msg"></textarea>
           <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label></li>
           <li style="display: inline-block;" class="submit animated fadeInUp"> 
           <input type="hidden" name="ip" value=""> 
           <input id="submit" type="submit" class="flat-button" value="HIT ME"></li>
           <li class=" animated fadeInUp" style="float: right; color: #fff; margin-top: 5px;">or <a style="color: #fff; text-decoration: underline;" href="mailto:kunlexzy@gmail.com"> send me an email </a>instead.</li>
           </ul>
           <div></div>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
  import BlastRoot from '~/components/BlastRoot'
  export default {
    components: {
      BlastRoot
    },
    data() {
      return {
        contact: ['C','o','n','t','a','c','t']
      }
    },
    methods: {
      Send(){
        alert('Email sent!')
      }
    }
  }
</script>