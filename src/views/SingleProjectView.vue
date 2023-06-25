<script>
  import { computed, isProxy, onMounted, toRaw } from "vue";
  import projectsData from "../projects.json"

  export default {
    data() {
      return {
        projects: projectsData,
        currentProject:{}
      };
    },
    computed:{
      whichProject() {
        return this.projects.find((project) => project.title === this.$route.name) || null;
      }
    },
    created() {
      this.currentProject = this.whichProject
    }
  }
</script>

<template>
  <div class="header-container">
    <div class="title"><h1>{{ currentProject.title }}</h1></div>
    <div class="project-tags"><span v-for="techno in currentProject.technos" class="single-tag">{{ techno }}</span></div>
    <div class="project-description">
      {{ currentProject.intro }}
    </div>
  </div>
</template>
