<template>
	<div id="carousel" class="carousel">
    <button v-on:click="slideRight" class="carousel-nav -mr-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="fill-current w-6 inline-block mr-1">
        <path d='M8.172 10l3.535-3.536a1 1 0 1 0-1.414-1.414L6.05 9.293a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414L8.172 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z' />
      </svg>
    </button>
    <div class="w-full flex max-w-full overflow-hidden rounded-lg">
      <div v-bind:style="{marginLeft: margin}" class="w-0" id="slide-item"></div>
        <div v-for="event in events" :key="event.id" v-bind:style="{backgroundImage: 'url(' + event.img + ')'}" class="bg-center h-full min-w-full bg-cover relative">
          <a v-bind:href="event.url" class="font-semibold text-white text-center w-full block absolute bottom-0 text-sm">{{ event.title }}</a>
        </div>
    </div>
    <button v-on:click="slideLeft" class="carousel-nav -ml-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="fill-current w-6 inline-block mr-1">
        <path d='M11.828 10l-3.535 3.536a1 1 0 0 0 1.414 1.414l4.243-4.243a1 1 0 0 0 0-1.414L9.707 5.05a1 1 0 0 0-1.414 1.414L11.828 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z' />
      </svg>
    </button>
  </div>
</template>
<script>
	export default {
		name: 'carousel',
		data: function() {
			return {
				current: 0
			}
		},
		methods: {
			slideLeft: function () {
        if (this.events.length-1 > this.current) {
          this.current++;
        }
      },
      slideRight: function () {
        if(this.current > 0) {
          this.current--;
        }
      },
		},
		computed: {
      margin: function (){
        return `${this.current * -100}%`
      },
      events() {
        return this.$store.state.events;
      }
    }
	}
</script>