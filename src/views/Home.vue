<template>
  <div>
    <div
      :style="
        'transition:0.5s; transition-delay:0.5s; opacity:' +
          (!loading ? '1' : '0')
      "
    >
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
      >
      </vue-particles>
      <b-container class="fixed">
        <b-row>
          <b-col md="12" class="text-center">
            <img
              alt="Lightened Limited logo"
              class="img-fluid"
              src="../assets/icon.png"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div
      :style="
        'transition:0.5s; transition-delay:0.5s; opacity:' +
          (loading ? '1' : '0;height:0px')
      "
    >
      <div class="stretched">
        <b-container>
          <b-row>
            <b-col md="2" class="text-center mx-auto" style="margin-top:25%">
              <img
                alt="Lightened Limited logo"
                class="img-fluid glow"
                src="../assets/icon.png"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      loading: this.$store.getters.lightened
    };
  },
  mounted() {
    if (document.readyState == "complete") {
      this.loading = false;
    } else {
      window.onload = () => (this.loading = false);
    }
  }
};
</script>
<style>
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
