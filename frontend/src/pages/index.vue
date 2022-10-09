<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<script setup lang="ts">
import type {Project} from "../backend/generated";
import {fetchProjects} from "../backend/api-consume";

useHead({
  title: 'Eternal reviews',
})

const projects = ref<Project[]>([])

onMounted(async () => {
  projects.value = await fetchProjects()
})
</script>

<template>
  <section>
    <template v-for="project in projects">
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
