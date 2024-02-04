<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
<template>
  <div class="greetings">
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>
