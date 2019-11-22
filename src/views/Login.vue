<template>
  <div id="login">
    <Titlebar class="text-gray-800" route="/landing" title="Sign In"></Titlebar>
    <div id="sign-in-image" class="h-64 bg-center bg-contain mt-10 bg-no-repeat m-10"></div>
    <div id="input-username" class="p-2">
      <input id="input" type="text" v-model="username" class="border-2 rounded-lg p-4 focus:border-green-400 hover:border-green-300 w-full focus:outline-none">
      <p v-bind:class="{ 'input-active' : username != ''}" id="placeholder" class="ml-3 px-1 bg-transparent absolute leading-none">Username</p>
    </div>
    <div id="input-password" class="p-2">
      <input id="input" type="password" v-model="password" class="border-2 rounded-lg p-4 focus:border-green-400 hover:border-green-300 w-full focus:outline-none">
      <p v-bind:class="{ 'input-active' : password != ''}" id="placeholder" class="ml-3 px-1 bg-transparent absolute leading-none">Password</p>
    </div>
    <div class="flex-col flex p-2">
      <router-link to="/" class="text-center text-xl mx-auto font-semibold text-white bg-green-600 pb-4 pt-3 mt-5 w-full rounded-full shadow-lg">Next</router-link>
      <button class="text-xl mx-auto font-semibold text-green-600 mb-5 pt-2 mt-2 w-64 rounded-full mt-2 pb-4">Forgot Password?</button>
    </div>
  </div>
</template>
<style scoped>
  #sign-in-image{
    background-image: url('/img/loginIllus.png')
  }
  #placeholder{
    margin-top: -39px;
    transition: 300ms;
    color: #718096;
  }
  #input:hover + #placeholder, 
  #input:focus + #placeholder, 
  #placeholder:hover, 
  .input-active{
    margin-top: -68px !important;
    font-size: 14px;
    color: #48bb78;
    background-color: white;
  }
</style>
<script>
import Titlebar from "../components/Titlebar";
export default {
  name: "login",
  components: {
    Titlebar
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
