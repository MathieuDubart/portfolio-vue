<script>
  import projectsData from "../projects-free.json"

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
    <h1 class="title"> Discover my work </h1>

    
    <div class="filters-container">
      <h3 class="subtitle">Filter by</h3>
      <select v-model="selectedTag" class="filters-select">
        <option value="">All</option>
        <option v-for="tag in tags" :value="tag">{{ tag }}</option>
      </select>
    </div>


    <div class="works-container grid md:grid-cols-3 sm:grid-cols-1">
      <div v-for="project in filteredProjects" :key="project.id" class="single-project">
        <RouterLink :to="'/works'+project.route">
          <h3 class="project-title ">{{ project.title }}</h3>
          <div class="project-tags"> <span v-for="tag in project.tags" class="single-tag light-grey">{{ tag }}</span> </div>
          <div class="project-link links">(See project)</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
