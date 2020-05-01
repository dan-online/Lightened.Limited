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
      <slide
        :class="currentSlide == i ? 'showme' : 'ignoreme'"
        v-for="(proj, i) in projects"
        :index="i"
        :key="proj.id"
      >
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
        <VueLightbox
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
          :images="currentSlide == i ? proj.slides : []"
        >
          <template
            v-slot:content="{ url: { image, title, description, link, alt } }"
          >
            <b-img-lazy
              @load="() => (imgloaded = true)"
              style="height: 50%"
              :src="image"
              :alt="alt"
            />
            <div>
              <h1>
                <a class="accent" :href="link" target="_blank">{{ title }}</a>
              </h1>
              <p>{{ description }}</p>
            </div>
          </template>
        </VueLightbox>

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
import "vue-pure-lightbox/dist/VuePureLightbox.css";
const Projects = () => import("../../Projects");
const VueLightbox = () => import("vue-pure-lightbox");
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
    Slide,
    VueLightbox
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
.lightbox__thumbnail img {
  height: 500px;
  width: 800px;
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
