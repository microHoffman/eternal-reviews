<template>
  <div class="project-page-wrapper" v-if="project">
    <h2>{{ project.name }}</h2>
    <h3>Create a review</h3>
    <CreateReview />
    <hr />
    <h3>Existing reviews</h3>
    <section class="row g-2">
      <ReviewDetail
        v-for="review in project.reviews"
        :review="review"
        class="col-3 col-md-6 col-sm-12"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { fetchSingleProject } from "@/backend/api-consume";
import ReviewDetail from "@/components/ReviewDetail.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import CreateReview from "@/components/CreateReview.vue";
import useSingleProject from "@/composables/useSingleProject";

const route = useRoute();

const { project } = useSingleProject();

onMounted(async () => {
  project.value = await fetchSingleProject(Number(route.params.id as string));
});
</script>

<style scoped></style>
