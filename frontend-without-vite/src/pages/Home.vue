<template>
  <section>
    <h2 class="heading">Projects with reviews</h2>
    <div v-for="project in projects" :key="project.id" class="card">
      <h4 class="card-header">
        <strong>{{ project.name }}</strong>
      </h4>
      <div class="card-body">
        <router-link :to="`/project/${project.id}`">
          <button class="btn btn-primary">Open project</button>
        </router-link>
      </div>
    </div>
    <div class="more-projects-soon">More projects to be added soon!</div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from "@/backend/generated";
import { fetchProjects } from "@/backend/api-consume";
import { onMounted, ref } from "vue";

const projects = ref<Project[]>([]);

onMounted(async () => {
  projects.value = await fetchProjects();
});
</script>

<style scoped>
.heading {
  margin-bottom: 2rem;
}

.more-projects-soon {
  margin-top: 3rem;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
}
</style>
