<script>
  export default {
    name: "ImageComponent",
    props: {
      source: {
        required: true
      }
    }
  };
</script>

<template>
    <img
    class="image-component"
    :src="source"
    alt="random image"
  >
</template>