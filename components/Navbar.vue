<template>
	<div class="navbar">
		<nuxt-link class="brand" to="/" rel="index">
			<span class="big">O</span><span class="small">B</span>
		</nuxt-link>
		<nav>
			<nuxt-link to="/" rel="index">
				<i class="fa fa-home"></i>
			</nuxt-link>
			<ul>
				<li v-for="link in social">
					<a target="_blank" :href="link.url">
						<i :class="link.icon"></i>
					</a>
				</li>
			</ul>
		</nav>
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