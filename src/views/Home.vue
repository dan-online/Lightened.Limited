<template>
  <div>
    <vue-particles
      color="#71dea2"
      :particleOpacity="1"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="1"
      :lineLinked="false"
      :lineOpacity="0"
      :moveSpeed="1"
      :hoverEffect="false"
      :clickEffect="false"
      :style="
        'transition: 0.5s; transition-delay: 0.5s; opacity: ' +
          (loading ? 0 : 1)
      "
    >
    </vue-particles>
    <div class="fixed">
      <b-container style="padding-top:20%">
        <b-row>
          <b-col
            style="transition: 1s;"
            :md="loading ? 12 : 2"
            class="text-center"
          >
            <img
              alt="Lightened Limited logo"
              :class="'img-fluid ' + (loading ? 'glow' : '')"
              style="transition: 1s"
              src="../assets/icon.png"
            />
          </b-col>
          <b-col
            :md="loading ? '0' : '10'"
            :style="
              'transition: 0.5s;' +
                (loading ? 'opacity: 0' : 'transition-delay: 1s;')
            "
          >
            <h1>{{ info.name }}</h1>
          </b-col>
        </b-row>
      </b-container>
      <Projects></Projects>
    </div>
  </div>
</template>

<script>
const Projects = () => import("../components/Projects.vue");

const Basic = () => import("../../LightenedLimited");

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      info: localStorage.LightenedLimited
        ? JSON.parse(localStorage.LightenedLimited)
        : {}
    };
  },
  mounted() {
    const next = () => {
      if (this.info.name) {
        this.loading = false;
      }
      Basic().then(data => {
        data = data.default;
        if (this.info.version && this.info.version === data.version) return;
        localStorage.LightenedLimited = JSON.stringify(data);
        this.info = data;
        this.loading = false;
      });
    };
    if (document.readyState == "complete") {
      next();
    } else {
      window.onload = () => next();
    }
  },
  components: {
    Projects
  }
};
</script>
<style>
img.big {
  height: 200px;
}
.stretched {
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
}
.glow {
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }
  to {
    filter: drop-shadow(0px 0px 15px var(--lightened-first));
    -webkit-filter: drop-shadow(0px 0px 15px var(--lightened-first));
  }
}
.fixed {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
}
#particles-js,
#particles-js canvas {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
  top: 0;
}
</style>
