<template>
	<div class="history" id="history-item">
    <svg v-if="item.value > 0" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="w-8 mt-6 h-5 fill-current text-green-500">
      <path d='M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-6.414V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 0 1 6.464 9.05L9 11.586z' />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="w-8 mt-6 h-5 fill-current text-red-500">
      <path d='M11 8.414V14a1 1 0 0 1-2 0V8.414L6.464 10.95A1 1 0 1 1 5.05 9.536l4.243-4.243a.997.997 0 0 1 1.414 0l4.243 4.243a1 1 0 1 1-1.414 1.414L11 8.414zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' />
    </svg>
    <div class="history-text">
      <div><span>{{ item.category }}</span><span>Rp {{ item.value }}</span></div>
      <div><span>{{ item.date }}</span><span>{{ item.weight }} Kg</span></div>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'history-item',
		props: {
			item: Object
		}
	}
</script>