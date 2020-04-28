<template>
  <b-container>
    <carousel :perPage="1">
      <slide v-for="project in projects.projects" :key="project.id">
        <b-row class="p-5">
          <b-col cols="8">
            <b-img-lazy :src="project.image"></b-img-lazy>
          </b-col>
          <b-col>
            <h1>{{project.desc}}</h1>
          </b-col>
        </b-row>
      </slide>
    </carousel>
  </b-container>
</template>



<script>
import { Carousel, Slide } from 'vue-carousel';
const Projects = () => import("../../Projects");


export default {
  name: "Projects",
  data() {
    return {
      test: "test", 
      projects: localStorage.LightenedProjects
        ? JSON.parse(localStorage.LightenedProjects)
        : {},
    }
  }, 
  mounted() {
    if (this.projects.version) {
      this.loading = false;
    }

    Projects().then(data => {
      data = data.default;
      if (this.projects.verison && this.projects.version === data.version) return;
      if (process.env.NODE_ENV === "production")
          localStorage.LightenedProjects = JSON.stringify(data);
      else delete localStorage.LightenedProjects;
      this.projects = data;
      this.loading = false;
    });
  },
  components: {
    Carousel, 
    Slide
  }
}

</script>

<style scoped>

.VueCarousel {
  height: 100vh;
}

img {
  height: 80%;
  width: auto; 
}

</style>