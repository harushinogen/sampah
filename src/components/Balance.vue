<template>
	<div id="balance">
    <div class="balance">
      <h1 class="balance-header">Total Saldo</h1>
      <h1 class="balance-saldo">Rp 25.450</h1>
    </div>
    <div class="flex justify-around mb-2 rounded-lg">
      <button class="rounded-lg bg-gray-200 flex-grow m-2 text-sm font-semibold text-gray-700 py-3 w-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="w-8 inline-block fill-current">
          <path d='M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm7 11v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z'/>
        </svg>
        Topup
      </button>
      <button class="rounded-lg bg-gray-200 flex-grow m-2 text-sm font-semibold text-gray-700 py-3 w-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="w-8 inline-block fill-current">
          <path d='M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm1 9h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z'/>
        </svg>
        Withdraw
      </button>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'balance'
	}
</script>