<template>
  <b-container>
    <carousel-3d :display="3" :space="800" :inverse-scaling="1500">
      <slide v-for="(proj, i) in projects" :index="i - 1" :key="proj.id">
        <b-img-lazy :src="proj.image"></b-img-lazy>
      </slide>
    </carousel-3d>
  </b-container>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
const Projects = () => import("../../Projects");

export default {
  name: "Projects",
  data() {
    return {
      projects: localStorage.LightenedProjects
        ? JSON.parse(localStorage.LightenedProjects)
        : {}
    };
  },
  mounted() {
    Projects().then(data => {
      data = data.default;
      if (this.projects.version && this.projects.version === data.version)
        return;
      if (process.env.NODE_ENV === "production")
        localStorage.LightenedProjects = JSON.stringify(data);
      else delete localStorage.LightenedProjects;
      this.projects = data.projects;
      this.$nextTick(() => window.dispatchEvent(new Event("resize")));
    });
  },
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style scoped>
img {
  height: 80%;
  width: auto;
}

.container {
  height: 100vh;
}

.VueCarousel-slide {
  visibility: visible;
  flex-basis: 100%;
  width: 100%;
}
</style>
