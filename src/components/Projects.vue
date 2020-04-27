<template>
  <div>
    <!-- <b-container v-for="project in projects.projects" :key="project.id">
      <h1>{{ project.name }}</h1>
    </b-container> -->
  </div>
</template>

<style scoped></style>

<script>
const Projects = () => import("../../Projects");

export default {
  name: "Projects",
  data() {
    return {
      projects: localStorage.LightenedProjects
        ? JSON.parse(localStorage.LightenedProjects)
        : {},
      loading: true
    };
  },
  mounted() {
    if (this.projects.version) {
      this.loading = false;
    }
    Projects().then(data => {
      data = data.default;
      if (this.projects.version === data.version) return;
      this.projects = data;
      this.loading = false;
    });
  }
}