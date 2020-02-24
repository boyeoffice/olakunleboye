<template>
  <div class="ADEMORIN">
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand to="/" rel="home">
      <img src="/img/cooltext349167867806161.png" alt="Olakunle Boye">
  		<img src="/img/349168519845770.png" alt="Olakunle Boye" style="width: 27px;">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" class="bg-dark" is-nav>
      <b-navbar-nav class="ml-md-auto" id="nav">
        <b-nav-item v-for="(link, index) in links" :key="index" :rel="link.name" :to="link.url">
          <i :class="link.icon"></i>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto _yr9s">
          <b-nav-item v-for="(link, index) in social" :key="index" :href="link.url" target="_blank">
            <i :class="link.icon"></i>
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
	export default {
		data: () => ({
			show: false,
			social: [
			{name: 'Twitter', url: 'https://www.twitter.com/dev_boye', icon: 'fa fa-twitter'},
			{name: 'Github', url: 'https://www.github.com/boyeoffice', icon: 'fa fa-github'},
			{name: 'LinkedIn', url: 'https://linkedin.com/in/devboye', icon: 'fa fa-linkedin'},
			{name: 'Instagram', url: 'https://instagram.com/in/devboye', icon: 'fa fa-instagram'}
		],
			links: [
				{name: 'home', url: '/', icon: 'icon-hom'},
				{name: 'about', url: '/about', icon: 'icon-prof'},
				{name: 'skills', url: '/skills', icon: 'icon-gear'},
				{name: 'gallery', url: '/portfolio', icon: 'icon-eye'},
				{name: 'contact', url: '/contact', icon: 'icon-mail'}
			]
		})
	}
</script>
