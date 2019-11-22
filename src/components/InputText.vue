<template>
  <div id="input-text" class="p-2">
    <input id="input" type="text" v-bind:value="input" class="border-2 rounded-lg p-4 focus:border-green-400 hover:border-green-300 w-full">
    <p v-bind:class="{ 'input-active' : input != ''}" id="placeholder" class="ml-3 px-1 bg-transparent absolute leading-none">Username</p>
  </div>
</template>
<script>
export default {
  name: "input-text",
  props: {
    input : String
  }
  // data() {
  //   return {
  //     input: ""
  //   }
  // }
}
</script>