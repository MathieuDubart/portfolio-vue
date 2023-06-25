<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<script lang="ts">
  export default {
    
    data() {
        return {
          show: false
        }
      },
    mounted() {
      this.show = true; // might need this.$nextTick
    }
  }
</script>

<template>
   <Transition><RouterView v-if="show"/></Transition>
  
  <div class="nav-container">
    <nav clas="navbar">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/works" class="nav-link">Works</RouterLink>
      <!-- <RouterLink to="/about" class="nav-link">About</RouterLink> -->
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    </nav>
  </div>
</template>