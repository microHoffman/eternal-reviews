<template>
  <article class="card">
    <header class="card-header">
      <span class="badge rounded-pill text-bg-primary score">
        {{ review.score }} stars
      </span>
      from {{ review.user.address }}
    </header>
    <div class="card-body">
      {{ review.text }}
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Review } from "@/backend/generated";
import { toRefs } from "vue";

interface Props {
  review: Review;
}
const props = defineProps<Props>();
const { review } = toRefs(props);
</script>

<style scoped>
.score {
  margin-right: 0.5rem;
}
</style>
