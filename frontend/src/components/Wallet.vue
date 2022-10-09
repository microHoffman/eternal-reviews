<template>
  <div v-if="isLoggedIn">
    {{ userAddress }}
  </div>
  <button v-else @click="connect">
    Connect wallet
  </button>
</template>

<script setup lang="ts">
import { connect } from "../composables/useLoginModal";
import useWeb3 from "../composables/useWeb3";

const { isLoggedIn, userAddress } = useWeb3()
</script>

<style scoped>

</style>