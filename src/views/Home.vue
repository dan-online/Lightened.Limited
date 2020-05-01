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
      v-if="!loading && info"
      :info="info"
      :style="
        'transition: 0.5s;' + (navMode ? 'opacity: 1' : 'opacity:0;height:0px')
      "
    ></Navbar>
    <div
      :class="'fixed ' + (!loading ? 'loaded' : '')"
      v-on:scroll.passive="e => (scroll = e.target.scrollTop)"
      :style="!loading ? 'overflow-y: scroll;' : 'overflow-y:hidden'"
    >
      <b-container style="height: 100vh">
        <b-row style="padding-top:25%;">
          <b-col
            style="transition: 1s;"
            :md="loading ? 12 : 3"
            class="text-center mt-4"
          >
            <picture>
              <source
                alt="LightenedLimited logo"
                :class="'img-responsive ' + (loading ? 'glow' : '')"
                :style="
                  'transition: all 1s; ' +
                    (loading ? 'width: 10vh' : 'max-width: 100%; width:22vh')
                "
                type="image/webp"
                :srcset="require('../../public/icon.webp')"
              />
              <source
                alt="LightenedLimited logo"
                :class="'img-responsive ' + (loading ? 'glow' : '')"
                :style="
                  'transition: all 1s; ' +
                    (loading ? 'width: 10vh' : 'max-width: 100%; width:22vh')
                "
                type="image/png"
                :srcset="require('../../public/icon.png')"
              />
              <img
                alt="LightenedLimited logo"
                :class="'img-responsive ' + (loading ? 'glow' : '')"
                :style="
                  'transition: all 1s; ' +
                    (loading ? 'width: 10vh' : 'max-width: 100%; width:22vh')
                "
                src="../../public/icon.png"
              />
            </picture>
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
      <div
        v-if="!loading && commits[0] && commits[0].commit"
        class="floater"
        :style="
          'transition: 0.5s;' +
            (loading ? 'opacity: 0' : 'transition-delay: 1s;')
        "
      >
        Running <span class="accent">v{{ info.version }}</span
        ><br />
        Github commit
        <a :href="commits[0].html_url">{{ commits[0].sha.slice(0, 7) }}</a
        ><br />
        Last updated
        <span class="accent">{{
          new Date(commits[0].commit.author.date)
            .toString()
            .split(new Date(commits[0].commit.author.date).getFullYear())[0] +
            " 2020"
        }}</span>
      </div>
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
      navMode: false,
      block: true,
      commits: []
    };
  },
  mounted() {
    const next = () => {
      this.commits = require("../assets/repoInfo.json");
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
      this.$nextTick(next);
    } else {
      window.onload = () => this.$nextTick(next);
    }
  },
  watch: {
    scroll() {
      this.navMode = this.scroll >= 275;
      const vh = window.innerHeight;
      const multiples = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (x, ind) => vh * ind + 1
      );
      const block = Boolean(
        Math.round(
          (multiples.reverse().find(x => this.scroll + vh >= x - 350) / vh) % 2
        )
      );
      if (block == this.block) return;
      else this.block = block;
      window.pJSDom[0].pJS.particles.array.forEach(p => {
        p.color.value = block ? "#71dea2" : "#fff";
      });
      window.pJSDom[0].pJS.fn.particlesUpdate();
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
.floater {
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 99999999999999;
}
@media (max-width: 768px) {
  .floater {
    display: none;
  }
}
@keyframes grider {
  from {
    background-size: 10px 10px;
  }
  to {
    background-size: 80px 80px;
  }
}
.fixed {
  background-size: 10px 10px;
  background-image: linear-gradient(
      90deg,
      rgba(128, 128, 128, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(180deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
}
.fixed.loaded {
  animation: grider 1.5s ease-in-out;
  background-image: linear-gradient(
      90deg,
      rgba(128, 128, 128, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(180deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  background-size: 80px 80px;
}
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
