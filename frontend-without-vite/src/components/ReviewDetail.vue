<template>
  <article class="review">
    <header class="review-header">
      {{ review.score }} {{ review.user.address }}
    </header>
    <div class="review-text">
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

<style scoped></style>
