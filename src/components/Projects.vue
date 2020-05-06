<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" class="text-center">
        <h1 class="title">Projects</h1>
        <p>These are projects I've worked on and made during my career</p>
      </b-col>
    </b-row>
    <carousel-3d
      :display="3"
      :space="1200"
      :inverse-scaling="1300"
      @before-slide-change="pageChange"
      ref="carousel"
      :width="800"
      :height="500"
    >
      <div v-for="(proj, i) in projects" :key="proj.id">
        <slide :class="currentSlide == i ? 'showme' : 'ignoreme'" :index="i">
          <!-- <VueLightbox
          :images="[proj.image]"
          :thumbnail="
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
        /> -->
          <div @click="() => (lightbox = proj)">
            <b-img-lazy
              :alt="'LightenedLimited ' + proj.name"
              class="thumb"
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
            >
            </b-img-lazy>
          </div>
          <!-- we are so sorry for this, we need to learn math better -->
        </slide>
      </div>
    </carousel-3d>
    <b-row>
      <b-col md="12" class="text-center">
        <p>Slide or click to move the carousel, click an image to view more!</p>
      </b-col>
    </b-row>
    <LightBox
      @close="() => (lightbox = {})"
      v-if="lightbox && lightbox.name"
      :project="lightbox"
    >
    </LightBox>
  </b-container>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
const LightBox = () => import("@/components/LightBox");
const Projects = () => import("../../Projects");
export default {
  name: "Projects",
  data() {
    return {
      projects: localStorage.LightenedProjects
        ? JSON.parse(localStorage.LightenedProjects)
        : {},
      currentSlide: 0,
      slides: 7,
      lightbox: {}
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
        this.projects = this.projects.projects;
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
    Slide,
    LightBox
  },
  methods: {
    pageChange(i) {
      this.currentSlide = i;
    }
  }
};
</script>

<style>
div.ignoreme .lightbox {
  display: none;
}
div.ignoreme * {
  pointer-events: none;
}
div.ignoreme {
  cursor: pointer;
}
.lightbox__thumbnail img,
.thumb {
  cursor: pointer;
  max-height: 500px;
  max-width: 800px;
  object-fit: cover;
}
.lightbox__image img {
  margin-top: -100px;
  max-height: 350px;
  width: 100%;
  object-fit: contain;
}
.container-fluid {
  height: 100vh;
  /* width: 100vh; */
}
</style>
