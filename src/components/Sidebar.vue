<template>
	<div id="sidebar" v-bind:class="{sidebarHidden: sidebarStatus }" class="sidebar">
    <div class="my-1">
      <button v-on:click="$emit('toggleSidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 24 24" class="fill-current h-8 text-gray-800">
          <path d='M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z' />
        </svg>
      </button>
    </div>
    <div class="sidebar-profile">
      <div style="background-image: url(img/863589.png)" class="profile-pic"></div>
      <div class="profile-desc">
        <h1>Konjiki no Yami</h1>
        <a href="#">Profile Page >></a>
      </div>
    </div>
    <a href="#" class="sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" class="h-6 fill-current inline-block mx-2 -mt-1">
        <path d='M9 20V8h9v9a3 3 0 0 1-3 3H9zm-2 0H3a3 3 0 0 1-3-3V8h7v12zM18 6H0V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3z' />
      </svg>
      <span class="text-lg">Dashboard</span>
    </a>
    <a href="#" class="sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" class="fill-current inline-block h-6 mx-2 -mt-1">
        <path d='M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z' />
      </svg>
      <span class="text-lg">Insight</span>
    </a>
    <a href="#" class="sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" class="fill-current inline-block h-6 mx-2 -mt-1">
        <path d='M17 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2zM3 8v2h2V8H3zm0 4v2h2v-2H3zm12 0v2h2v-2h-2zm0-4v2h2V8h-2zM7 8v2h2V8H7zm4 0v2h2V8h-2zm0 4v2h2v-2h-2zm-4 0v2h2v-2H7zM5 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm-5 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z' />
      </svg>
      <span class="text-lg">Event</span>
    </a>
    <a href="#" class="sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -2 24 24" class="fill-current inline-block h-6 mx-2 -mt-1">
        <path d='M14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L14 5.714zM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.393.061a7.976 7.976 0 0 0 .545-4.058L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13l-.312-1.056a7.964 7.964 0 0 0 3.821-1.674 3 3 0 1 0 2.384-3.177z' />
      </svg>
      <span class="text-lg">Setting</span>
    </a>
    <a href="#" class="sidebar-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" class="fill-current inline-block h-6 mx-2 -mt-1">
        <path d='M10 20.393c-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10s10 4.478 10 10c0 5.523-4.477 10-10 10zm1.276-8.218l.394-.308a3.5 3.5 0 1 0-4.31-5.516l-.394.308a1 1 0 1 0 1.231 1.576l.394-.308a1.5 1.5 0 0 1 1.847 2.364l-.394.308a1 1 0 1 0 1.232 1.576zM10 15.393a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
      </svg>
      <span class="text-lg">Help</span>
    </a>
  </div>
</template>
<script>
	export default {
		name: "sidebar",
		props: {
			sidebarStatus: Boolean
		}
	}
</script>