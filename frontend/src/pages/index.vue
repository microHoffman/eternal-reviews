<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<script setup>
import {Project} from "../types/project";

useHead({
  title: 'Eternal reviews',
})

const projects = ref<Array[Project]>([])

onMounted(async () => {
  projects.value = await fetchAllProjects()
})
</script>

<template>
  <section>
    <template v-for="project in projects">
      <div class="project-preview-wrapper">
        <h3>{{ project.name }}</h3>
        <div class="project-preview-description">{{ project.description }}</div>
        <router-link :to="`/project/${project.slug}`">
          <button>Open project</button>
        </router-link>
      </div>
    </template>
  </section>
</template>
