<template>
	<div id="top-bar" class="top-bar">
    <button class="w-8" v-on:click="$emit('toggleSidebar')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
      </svg>
    </button>
    <h1>SEGAWON</h1>
    <button class="w-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current">
        <path d="M6 8v7h8V8a4 4 0 1 0-8 0zm2.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8a6 6 0 0 1 4.03-5.67zM12 18a2 2 0 1 1-4 0h4z"/>
      </svg>
    </button>
  </div>
</template>
<script>
	export default {
		name: "top-bar"
	}
</script>