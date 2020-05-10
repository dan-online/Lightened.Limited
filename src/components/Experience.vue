<template>
  <b-container>
    <b-row>
      <b-col md="6">
        <h1 class="title">Experience</h1>
        <p class="text-white">{{ experiences.desc }}</p>
      </b-col>
      <b-col md="6">
        <b-container>
          <b-row>
            <metro-tile
              v-for="tile in experiences.tiles"
              :key="tile.cords.i"
              class="col-6 top p-0"
              :frontStyle="tile.frontStyle"
              :backStyle="{ 'background-color': 'red' }"
              :rotateX="tile.rotateX"
              @mouseover.native="tileOver(tile)"
              @mouseleave.native="resetTile(tile)"
            >
              <div slot="front" class="slot">
                front
              </div>
              <div slot="back" class="slot">
                back
              </div>
              <div slot="top" class="slot">
                top
              </div>
              <div slot="bottom" class="slot">
                bottom
              </div>
            </metro-tile>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<style>
.top div {
  width: 100% !important;
}
</style>
<script>
const Experiences = () => import("../../Experiences");
const MetroTile = () => import("vue-metro-tile");

export default {
  data() {
    return {
      experiences: localStorage.LightenedExperiences
        ? JSON.parse(localStorage.LightenedExperiences)
        : {},
    };
  },
  mounted() {
    Experiences().then((data) => {
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
};
</script>
