<template>
  <div id="landing" class="">
    <h1 class="text-green-600 text-4xl font-semibold text-center mt-16">Sampah Kita</h1>
    <h1 class="text-lg font-semibold text-center mt-16 mx-10">Start turn your trash into money now</h1>
    <p class="text-lg text-center mt-3 mx-10">Help clean the world with your small actions</p>
    <div id="landing-image" class="h-64 bg-center bg-contain mt-10 bg-no-repeat"></div>
    <div class="flex-col flex">
      <router-link to="/login" class="text-center text-xl mx-auto font-semibold text-white bg-green-600 pb-3 pt-2 mt-5 w-64 rounded-full">Sign In</router-link>
      <button class="text-xl mx-auto font-semibold text-green-600 mb-5 pt-2mt-5 w-64 rounded-full mt-2 pb-3">Create New Account</button>
    </div>
  </div>
</template>
<style scoped>
  #landing-image{
    background-image: url('/img/illustration.png');
  }
</style>
<script>
export default {
  
}
</script>