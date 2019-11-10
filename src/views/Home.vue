<template>
  <div id="app">
    <Topbar v-on:toggleSidebar="toggleSidebar"></Topbar>
    <div id="content" class="content">
      <Balance></Balance>
      <Carousel></Carousel>
      <History></History>
      <button v-on:click="fetchData" class="mb-5 rounded-lg bg-blue-500 hover:bg-blue-400 active:bg-blue-300 text-white text-xl w-full p-3 shadow-lg">Fetch The God Damn Data!</button>
    </div>
    <button v-on:click="toggleSidebar" v-show="!sidebarClose" class="w-screen h-screen cursor-default fixed top-0 right-0 z-20"></button>
    <Sidebar v-on:toggleSidebar="toggleSidebar" v-bind:sidebarStatus="sidebarClose"></Sidebar>
  </div>
</template>


<style>
  #slide-item, #sidebar{
    transition: 800ms;
  }
  button:focus{
    outline: none;
  }
  .sidebarHidden{
    margin-left: -100%;
  }
  .balance {
    background: linear-gradient(119.15deg, #68D391 0%, #38A169 100.7%);
  }
</style>

<script>
  import Sidebar from '../components/Sidebar';
  import History from '../components/History';
  import Balance from '../components/Balance';
  import Carousel from '../components/Carousel';
  import Topbar from '../components/Topbar';

  export default {
    components: {
      Sidebar,
      History,
      Balance,
      Carousel,
      Topbar
    },
    name: 'app',
    data: function () {
      return {
        sidebarClose: true
      }
    },
    methods: {
      fetchData () {
        this.$store.dispatch('loadEvents')
      },
      toggleSidebar: function () {
        this.sidebarClose = !this.sidebarClose;
      }
    },
    computed: {
      margin: function (){
        return `${this.current * -100}%`
      }
    }
  }
</script>
