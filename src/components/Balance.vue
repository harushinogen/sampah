<template>
	<div id="balance">
    <div class="balance">
      <h1 class="balance-header">Total Saldo</h1>
      <h1 class="balance-saldo">Rp 25.450</h1>
    </div>
    <div class="flex justify-around mb-2 mt-1 shadow-lg rounded-lg">
      <button class="balance-btn text-sm font-semibold border-r border-gray-200 flex-grow py-3">
        Topup
      </button>
      <button class="balance-btn text-sm font-semibold border-l border-gray-200 flex-grow py-3">
        Redeem
      </button>
    </div>
  </div>
</template>
<script>
	export default {
		name: 'balance'
	}
</script>