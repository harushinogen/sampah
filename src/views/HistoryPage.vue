<template>
	<div id="history-page">
		<Titlebar class="text-gray-800" title="Riwayat"></Titlebar>
		<div class="flex justify-between h-16">
			<div class="select-container" 
			v-on:mouseleave="() => showCategoryItem = false" 
			v-on:mouseenter="() => showCategoryItem = true">
				<button 
				v-on:click="() => showCategoryItem = true" 
				class="select-btn">{{ selectedCategory }}
					<svg 
					xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 24 24" v-show="!showCategoryItem"
					class="fill-current h-5 inline-block float-right -mb-1">
						<path d='M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z' />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" 
					class="fill-current h-5 inline-block float-right -mb-1" v-show="showCategoryItem">
						<path d='M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z' />
					</svg>
				</button>
				<button 
				v-on:click="() => {selectCategory(index); showCategoryItem = false}" 
				v-show="!category.selected && showCategoryItem" 
				class="select-item" 
				v-for="(category, index) in categoryList" 
				v-bind:key="category.id">{{ category.name}}</button>
			</div>
			<div 
			class="select-container right-0" 
			v-on:mouseleave="() => showOrderItem = false" 
			v-on:mouseenter="() => showOrderItem = true">
				<button 
				v-on:click="() => showOrderItem = true" 
				class="select-btn rounded-t z-20">{{ selectedOrder }}
					<svg 
					xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 24 24" v-show="!showOrderItem"
					class="fill-current h-5 inline-block float-right -mb-1">
						<path d='M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z' />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" 
					class="fill-current h-5 inline-block float-right -mb-1" v-show="showOrderItem">
						<path d='M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z' />
					</svg>
				</button>
				<button 
				v-on:click="() => {selectOrder(index); showOrderItem = false}" 
				v-show="!order.selected && showOrderItem" 
				class="select-item" v-for="(order, index) in orderList" 
				v-bind:key="order.id">{{ order.name}}</button>
			</div>
		</div>
		<div class="border-b mx-8 border-gray-500"></div>
		<div class="px-2 py-5">
			<HistoryItem v-for="item in items" v-bind:key="item.id" v-bind:item="item"></HistoryItem>
		</div>
	</div>
</template>
<script>
	import Titlebar from '../components/Titlebar';
	import HistoryItem from '../components/HistoryItem';


	export default {
		name: "history-page",
		components: {
			Titlebar,
			HistoryItem
		},
		data () {
			return {
				selectedCategory: "Plastik",
				selectedOrder: "Terbaru",
				categoryList: [
					{name: "Plastik", selected: true},
					{name: "Kertas", selected: false},
					{name: "Kaleng", selected: false},
					{name: "Botol", selected: false}
				],
				orderList: [
					{name: "Terbaru", selected: true},
					{name: "Terlama", selected: false},
					{name: "Terbesar", selected: false},
					{name: "Terkecil", selected: false}
				],
				showCategoryItem: false,
				showOrderItem: false,
				items: [
          {category: "Plastik", date: "Senin, 25/12/2019", value: 12000, weight: 0.7},
          {category: "Plastik", date: "Senin, 25/12/2019", value: 5000, weight: 0.3},
          {category: "Plastik", date: "Senin, 25/12/2019", value: 7000, weight: 0.5},
        ]
			}
		},
		methods: {
			selectCategory: function (index) {
				this.categoryList.forEach(category => {
					category.selected = false
				})
				this.categoryList[index].selected = true;
				this.selectedCategory = this.categoryList[index].name
			},
			selectOrder: function (index) {
				this.orderList.forEach(order => {
					order.selected = false
				})
				this.orderList[index].selected = true;
				this.selectedOrder = this.orderList[index].name
			}
		}
	}
</script>