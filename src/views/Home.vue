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
    <Navbar
      v-if="!loading"
      :style="'transition: 0.5s;' + (navMode ? 'opacity: 1' : 'opacity:0')"
    ></Navbar>
    <div
      class="fixed"
      v-on:scroll.passive="e => (scroll = e.target.scrollTop)"
      style="overflow-y: scroll;"
    >
      <b-container style="height: 100vh">
        <b-row style="padding-top:25%;">
          <b-col
            style="transition: 1s;"
            :md="loading ? 12 : 3"
            class="text-center mt-4"
          >
            <img
              alt="Lightened Limited logo"
              :class="'img-responsive ' + (loading ? 'glow' : '')"
              :style="
                'transition: all 1s; ' +
                  (loading ? 'width: 10vh' : 'max-width: 100%; width:22vh')
              "
              src="../../public/icon.png"
            />
          </b-col>
          <b-col
            class="mt-4"
            :md="loading ? '0' : '8'"
            :style="
              'transition: 0.5s;' +
                (loading ? 'opacity: 0' : 'transition-delay: 1s;')
            "
          >
            <Info :info="info" v-if="!loading"></Info>
          </b-col>
        </b-row>
      </b-container>
      <b-container
        class="mt-4"
        :style="
          'transition: 0.5s;' +
            (loading ? 'opacity: 0' : 'transition-delay: 1s;')
        "
        fluid
      >
        <b-row>
          <b-col md="12">
            <Projects v-if="!loading"></Projects>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
const Projects = () => import("@/components/Projects.vue");
const Info = () => import("@/components/Info.vue");
const Basic = () => import("../../LightenedLimited");
const Navbar = () => import("@/components/Navbar");
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      info: localStorage.LightenedLimited
        ? JSON.parse(localStorage.LightenedLimited)
        : {},
      scroll: 0,
      navMode: false
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
        if (process.env.NODE_ENV === "production")
          localStorage.LightenedLimited = JSON.stringify(data);
        else delete localStorage.LightenedLimited;
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
  watch: {
    scroll() {
      this.navMode = this.scroll >= 275;
    }
  },
  components: {
    Projects,
    Info,
    Navbar
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
