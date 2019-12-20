<template>
	<div class="navbar">
		<nuxt-link to='/' class="logo">
		<img src="/img/logo.png" alt="">
		<img src="/img/logo_sub.png" alt="">
		</nuxt-link>
		<nav :class="{'en': true, 'show': show}">
			<nuxt-link :rel="link.name" :to="link.url" v-for="(link, index) in links" :key="index">
				<i :class="link.icon"></i>
			</nuxt-link>
		</nav>
		<a @click="show = !show" class="toggle" href="javascript:void(0)">
			<i class="fa fa-bars"></i>
		</a>
	</div>
</template>

<script>
	export default {
		data: () => ({
			show: false,
			social: [
			{name: 'Twitter', url: 'https://www.twitter.com/dev_boye', icon: 'fa fa-twitter'},
			{name: 'Github', url: 'https://www.github.com/boyeoffice', icon: 'fa fa-github'},
			{name: 'LinkedIn', url: '#', icon: 'fa fa-linkedin'}
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
