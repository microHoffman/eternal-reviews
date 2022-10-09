<template>
  <div class="container">
    <header class="app-header">
      <router-link to="/">
        <h1 class="main-title">Eternal reviews</h1>
      </router-link>
      <Wallet />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Wallet from "@/components/Wallet.vue";
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
}

.main-title {
  font-size: 3rem;
  padding: 1rem 0;
  text-align: center;
}
</style>
