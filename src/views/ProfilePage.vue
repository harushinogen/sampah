<template>
  <div id="profile" class="flex flex-col">
    <div class="rounded-b-lg h-64 shadow-lg pt-3 text-gray-100" style="background: linear-gradient(119.15deg, #68D391 0%, #38A169 100.7%);">
      <Titlebar title="Profile"></Titlebar>
      <div style="background-image: url(img/863589.png)" class="profile-pic mx-auto h-24 w-24 border-4 border-white"></div>
      <p class="text-xl text-center mt-2">Konjiki no Yami</p>
      <p class="text-center">@yami_chan</p>
    </div>
    <div class="mx-5 my-2">
      <h1 class="mb-2 text-gray-700">About You</h1>
      <div class="border-gray-500 border-t mx-3">
        <div class="flex my-4">
          <h1 class="w-20 leading-loose text-gray-500 pt-1">Email</h1>
          <input type="text" class="flex-grow w-1 bg-gray-200 p-2 rounded pl-3 pr-8 text-gray-700" value="yamichan@toloveru.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" class="fill-current inline-block h-5 mt-3 w-8 text-gray-700 -ml-8">
            <path d='M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z' />
          </svg>
        </div>
        <div class="flex my-4">
          <h1 class="w-20 leading-loose text-gray-500 pt-1">No. Telp</h1>
          <input type="text" class="flex-grow w-1 bg-gray-200 p-2 rounded pl-3 pr-8 text-gray-700" value="+62 8585 7532 554">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" class="fill-current inline-block h-5 mt-3 w-8 text-gray-700 -ml-8">
            <path d='M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z' />
          </svg>
        </div>
        <div class="flex my-4">
          <h1 class="w-20 leading-loose text-gray-500 pt-1">Password</h1>
          <input type="password" class="flex-grow w-1 bg-gray-200 p-2 rounded pl-3 pr-8 text-gray-700" value="pass1234">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" class="fill-current inline-block h-5 mt-3 w-8 text-gray-700 -ml-8">
            <path d='M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z' />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex justify-center justify-end flex-grow flex-col pt-20">
      <router-link to="/landing" class="text-white text-center text-xl pt-3 pb-4 w-40 font-semibold rounded-full bg-red-500 mx-auto">Logout</router-link>
    </div>
  </div>
</template>

<script>
  import Titlebar from '../components/Titlebar'

export default {
  name: "profile",
  components: {
    Titlebar
  }
}
</script>