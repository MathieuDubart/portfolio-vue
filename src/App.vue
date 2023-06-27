<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
    <nav class="navbar">
      <div class="nav-section">
        <RouterLink to="/" class="nav-link">(Home)</RouterLink>
      </div>
      <div class="nav-section">
        <RouterLink to="/works" class="nav-link">(Works)</RouterLink>
      </div>
      <div class="nav-section contact-link">
        <RouterLink to="/contact" class="nav-link">(Contact)</RouterLink>
      </div>
    </nav>
  </div>
</template>