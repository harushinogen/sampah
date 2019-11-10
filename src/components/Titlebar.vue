<template>
	<div id="title-bar" class="h-16 flex p-2 flex">
		<router-link to="/" class="z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="fill-current h-8">
        <path d='M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z' />
      </svg>
		</router-link>
		<h1 class="w-screen text-center -mt-1 -ml-8 font-semibold text-2xl flex-grow">{{ title }}</h1>
	</div>
</template>
<script>
	export default {
		name: "title-bar",
		props: {
			title: String
		}
	}
</script>