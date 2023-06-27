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
    <h1 class="title">{{ currentProject.title }}</h1>
    <div class="project-tags"><h3 class="subtitle"><span v-for="techno in currentProject.technos" class="single-tag light-grey">{{ techno }}</span></h3></div>
    <div class="see-it-live"> <a :href="currentProject.href" target="_blank" class="live-link"> {{ currentProject.cta_label }}</a></div>
    <div class="project-description">
      {{ currentProject.intro }}
    </div>
  </div>
</template>
