<script>
  import projectsData from "../projects.json"

  export default {
  data() {
    return {
      projects: projectsData,
      selectedTag: "",
    };
  },
  computed: {
    tags() {
      // Créer un tableau unique de tous les tags
      let tags = [];
      this.projects.forEach((project) => {
        project.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      });
      return tags;
    },
    filteredProjects() {
      // Filtrer les projets en fonction du tag sélectionné
      if (this.selectedTag === "") {
        return this.projects;
      } else {
        return this.projects.filter((project) =>
          project.tags.includes(this.selectedTag)
        );
      }
    },
  },
};


</script>

<template>
  <div class="works">
    <h1> Discover my works </h1>

    

    <select v-model="selectedTag">
      <option value="">All</option>
      <option v-for="tag in tags" :value="tag">{{ tag }}</option>
    </select>

    <div class="works-container grid grid-cols-3 xs:grid-cols-1">
      <div v-for="project in filteredProjects" :key="project.id" class="single-project">
        <h3 class="project-title ">{{ project.title }}</h3>
        <div class="project-tags"> <span v-for="tag in project.tags" class="single-tag rainbow">{{ tag }}</span> </div>
        <div class="project-link"> <RouterLink :to="project.route"> See project </RouterLink></div>
      </div>
    </div>
  </div>
</template>