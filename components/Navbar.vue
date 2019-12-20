<template>
	<div class="navbar">
		<nuxt-link to='/' class="logo">
		<div class="big">
			b
		</div>
		<div class="small">
			boye
		</div>
		</nuxt-link>
		<a class="toggle" href="javascript:void(0)">
			<i class="fa fa-bars"></i>
		</a>
	</div>
</template>

<script>
	export default {
		data: () => ({
			social: [
			{name: 'Twitter', url: 'https://www.twitter.com/dev_boye', icon: 'fa fa-twitter'},
			{name: 'Github', url: 'https://www.github.com/boyeoffice', icon: 'fa fa-github'},
			{name: 'LinkedIn', url: '#', icon: 'fa fa-linkedin'}
			]
		})
	}
</script>
