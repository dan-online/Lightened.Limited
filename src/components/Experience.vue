<template>
  <b-container fluid>
    <b-row>
      <b-col md="4"> </b-col>
      <b-col md="8">
        <b-row>
          <b-col md="3" v-for="tile in experiences.tiles" :key="tile.cords.i">
            <metro-tile
              :frontStyle="tile.frontStyle"
              :backStyle="{ 'background-color': 'red' }"
              :rotateX="tile.rotateX"
              @mouseover.native="tileOver(tile)"
              @mouseleave.native="resetTile(tile)"
              :key="tile.id"
            >
              <div slot="front">
                front
              </div>
              <div slot="back">
                back
              </div>
              <div slot="top">
                top
              </div>
              <div slot="bottom">
                bottom
              </div>
            </metro-tile>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
const Experiences = () => import("../../Experiences");
const MetroTile = () => import("vue-metro-tile");

export default {
  data() {
    return {
      experiences: localStorage.LightenedExperiences
        ? JSON.parse(localStorage.LightenedExperiences)
        : {},
      window: window,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  mounted() {
    Experiences().then(data => {
      data = data.default;
      if (
        this.experiences.version &&
        this.experiences.version === data.version
      ) {
        return;
      }
      if (process.env.NODE_ENV === "production") {
        localStorage.LightenedExperiences = JSON.stringify(data);
      } else {
        delete localStorage.LightenedExperiences;
      }
      this.experiences = data;
    });
  },
  components: {
    MetroTile,
  },
  methods: {
    tileOver(tile) {
      tile.rotateX = 90;
    },
    resetTile(tile) {
      tile.rotateX = 0;
    },
  },
  created() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    });
  },
};
</script>
