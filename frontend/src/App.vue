<script setup>

</script>

<template>
  <div>
    <header class="app-header">
      <h1 class="main-title">Eternal reviews</h1>
      <Wallet />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
}

.main-title {
  font-size: 3rem;
  padding: 1rem 0;
  text-align: center;
}
</style>
