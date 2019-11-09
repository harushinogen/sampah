<template>
	<div id="history" class="">
    <div class="flex text-gray-800">
      <span class="text-2xl flex-grow">Riwayat Aktivitas</span>
      <router-link to="/history">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" class="h-8 fill-current">
          <path d='M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z' />
        </svg>
      </router-link>
    </div>
    <div class="flex text-sm text-gray-800">
      <span class="flex-grow">Minggu Ini</span>
      <span>Rp 5.000</span>
    </div>
    <div class="border-b m-2 border-gray-500"></div>
    <div class="">
      <HistoryItem v-for="item in items" v-bind:key="item.id" v-bind:item="item"></HistoryItem>
    </div>
  </div>
</template>
<script>
  import HistoryItem from '../components/HistoryItem';

	export default {
		name: "history",
    components: {
      HistoryItem
    },
    data () {
      return {
        items: [
          {category: "Plastik", date: "Senin, 25/12/2019", value: 12000, weight: 0.7},
          {category: "Kertas", date: "Senin, 25/12/2019", value: 5000, weight: 0.3},
          {category: "Uang Keluar", date: "Senin, 25/12/2019", value: -12000, weight: 0},
        ]
      }
    }
	}
</script>