<template>
  <div class="project-page-wrapper" v-if="project">
    <h2>{{ project.name }}</h2>
    <h3>Reviews</h3>
    <CreateReview :project-id="project.id" />
    <section class="reviews-wrapper">
      <ReviewDetail v-for="review in project.reviews" :review="review" />
    </section>
  </div>
</template>

<script setup lang="ts">
import type {Project} from "../../backend/generated";
import {fetchSingleProject} from "../../backend/api-consume";
import ReviewDetail from "../../components/ReviewDetail.vue";

const route = useRoute()

const project = ref<Project>()

onMounted(async () => {
  // @ts-ignore
  project.value = await fetchSingleProject(route.params.id)
})
</script>

<style scoped>
.review {
  padding: 1rem;
  border: 1px solid black;
}
</style>