<template>
  <b-container fluid>
    <carousel-3d
      :display="3"
      :space="1200"
      :inverse-scaling="1300"
      @before-slide-change="pageChange"
      ref="carousel"
      :width="800"
      :height="500"
    >
      <slide v-for="(proj, i) in projects" :index="i" :key="proj.id">
        <b-img-lazy
          :src="
            currentSlide == i ||
            currentSlide - 1 == i ||
            currentSlide + 1 == i ||
            currentSlide - 2 == i ||
            currentSlide + 2 == i ||
            (i == projects.length - 1 && currentSlide - 1 == -1) ||
            (i == 0 && currentSlide == projects.length - 1)
              ? proj.image
              : ''
          "
        ></b-img-lazy>
        <!-- we are so sorry for this, we need to learn math better -->
      </slide>
      <!-- <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <img src="https://placehold.it/360x270">
      </slide> -->
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
        : {},
      currentSlide: 0,
      slides: 7
    };
  },
  mounted() {
    if (this.projects.version) {
      this.$refs.carousel.goSlide(1); //damn vue-carousel-3d bugs
    }
    Projects().then(data => {
      data = data.default;
      if (this.projects.version && this.projects.version === data.version) {
        this.$nextTick(() => window.dispatchEvent(new Event("resize")));
        return;
      }
      if (process.env.NODE_ENV === "production")
        localStorage.LightenedProjects = JSON.stringify(data);
      else delete localStorage.LightenedProjects;
      this.projects = data.projects;
      this.$nextTick(() => {
        window.dispatchEvent(new Event("resize")); //damn vue-carousel-3d bugs
        this.$refs.carousel.goSlide(1);
      });
    });
  },
  components: {
    Carousel3d,
    Slide
  },
  methods: {
    pageChange(i) {
      this.currentSlide = i;
    }
  }
};
</script>

<style scoped>
img {
  height: 80%;
  width: auto;
}

.container-fluid {
  height: 100vh;
  /* width: 100vh; */
}
</style>
