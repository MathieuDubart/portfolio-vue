<script>
  import { computed, isProxy, onMounted, toRaw } from "vue";
  import projectsData from "../projects-alt.json"

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Autoplay} from 'swiper';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Autoplay],
      };
    },
    data() {
      return {
        projects: projectsData,
        currentProject:{},
        swiperOptions: {
          breakpoints: {
            640: {
              'navigation':true,
            }
          }
        }
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
    <h1 class="title" v-html="currentProject.title"></h1>
    <h2 class="client"> <span class="for-subtitle">for</span> {{ currentProject.client }}</h2>
    <div class="project-tags"><h3 class="subtitle"><span v-for="techno in currentProject.technos" class="single-tag light-grey">{{ techno }}</span></h3></div>
    <div class="see-it-live"> <a :href="currentProject.href" target="_blank" class="live-link links"> {{ currentProject.cta_label }}</a></div>
    <div class="project-description" v-html="currentProject.intro">
    </div>

    <div v-if="currentProject.medias_type=='video'" class="work-video">
      <iframe :src="currentProject.video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>

    <swiper
    :pagination="true"
    :navigation="false"
    :modules="modules"
    :autoplay="true"
    :loop="true"
    :breakpoints="swiperOptions.breakpoints"
    class="works-swiper"
    v-else
    >
      <swiper-slide v-for="image in currentProject.images">
        <img :src="image" alt="carousel slide" class="carousel-slide">
      </swiper-slide>
    </swiper>

  </div>
</template>