<template>
  <section>
    <template v-for="project in projects" :key="project.id">
      <div class="project-preview-wrapper">
        <h3>{{ project.name }}</h3>
        <!--<div class="project-preview-description">{{ project.description }}</div>-->
        <router-link :to="`/project/${project.id}`">
          <button>Open project</button>
        </router-link>
      </div>
    </template>
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

<style scoped></style>
