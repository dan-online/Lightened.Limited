<template>
  <div>
    <b-container> </b-container>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: this.$store.getters.projects || []
    };
  }
};
</script>
