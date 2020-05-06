<template>
  <div :class="'lightbox ' + (loaded ? 'loaded' : '')">
    <b-container class="p-3 over">
      <b-row class="no-gutters">
        <b-col md="10"> </b-col>
        <b-col md="2" class="text-right">
          <button @click="close">
            <fa class="accent" icon="times"></fa>
          </button>
        </b-col>
      </b-row>
      <b-row class="no-gutters">
        <b-col md="12">
          <b-img-lazy
          class="img-fluid"
            :src="project.image"
            :alt="'LightenedLimited ' + project.name"
          ></b-img-lazy>
        </b-col>
        <b-col md="12" class="pl-2 pr-2">
          <h1>
            <a target="_blank" class="accent" :href="project.url">{{
              project.name
            }}</a>
          </h1>
          <p style="color:black">{{ project.desc }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style>
.over {
  overflow-y: scroll;
}
svg.accent {
  font-size: 22px;
}
.lightbox {
  filter: none;
  position: fixed;
  transition: 0.5s;
  height: 80vh;
  opacity: 0;
  top: 110px;
  left: 10px;
  right: 10px;
  z-index: 99999999999999999999999999;
}
.lightbox.loaded {
  opacity: 1;
}
.lightbox .container {
  background: #fff;
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loaded = true;
    });
  },
  methods: {
    close() {
      this.loaded = false;
      setTimeout(() => {
        return this.$emit("close");
      }, 500);
    }
  },
  props: {
    project: {
      default() {
        return {};
      },
      type: Object
    }
  }
};
</script>
