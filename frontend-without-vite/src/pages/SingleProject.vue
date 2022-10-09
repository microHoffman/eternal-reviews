<template>
  <div class="project-page-wrapper" v-if="project">
    <h2>{{ project.name }}</h2>
    <h3>Create a review</h3>
    <CreateReview :project-id="project.id" />
    <section class="reviews-wrapper">
      <h3>Existing reviews</h3>
      <ReviewDetail v-for="review in project.reviews" :review="review" />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/backend/generated";
import { fetchSingleProject } from "@/backend/api-consume";
import ReviewDetail from "@/components/ReviewDetail.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import CreateReview from "@/components/CreateReview.vue";

const route = useRoute();

const project = ref<Project>();

onMounted(async () => {
  project.value = await fetchSingleProject(Number(route.params.id as string));
});
</script>

<style scoped></style>
