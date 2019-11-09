<template>
	<div id="balance" class="balance">
    <h1 class="balance-header">Total Saldo</h1>
    <h1 class="balance-saldo">Rp 25.450</h1>
    <div class="flex justify-around">
      <button class="balance-btn">
        <div class="flex justify-center w-32">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="fill-current w-6 inline-block mr-1">
            <path d='M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm6 9.828l3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.243a1 1 0 0 1-1.414 0L5.05 9.707a1 1 0 0 1 1.414-1.414L10 11.828z' />
          </svg>
          <p class="text-lg font-semibold h-6">Redeem</p>
        </div>
      </button>
      <button class="balance-btn">
        <div class="flex justify-center w-32">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" class="fill-current w-6 inline-block mr-1">
            <path d='M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm6 7.172l-3.536 3.535a1 1 0 1 1-1.414-1.414L9.293 7.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414L10 9.172z' />
          </svg>
          <span class="text-lg font-semibold">Topup</span>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'balance'
	}
</script>