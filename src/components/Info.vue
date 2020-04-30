<template>
  <div id="load" :class="loading ? '' : 'loaded'">
    <span
      ><a
        class="mr-1 accent"
        aria-label="Lightened.Limited github repo"
        href="https://github.com/dan-online/Lightened.Limited"
      >
        <fa icon="code-branch"></fa
      ></a>
      with
      <a class="ml-1 accent" href="https://dancodes.online">DanCodes</a></span
    >
    <h1>
      Hi, I'm <span class="accent">{{ info.name }}</span>
    </h1>
    <p>{{ info.about }}</p>
    <Socials v-if="info && info.social" :socials="info.social"></Socials>
  </div>
</template>

<script>
const Socials = () => import("../components/Socials");
export default {
  name: "Info",
  props: {
    info: {}
  },
  components: {
    Socials
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
  }
};
</script>
<style scoped>
.hover-first:hover {
  color: var(--lightened-first) !important;
}
#load * {
  transition: all 1s;
  opacity: 0;
}
#load.loaded * {
  opacity: 1;
}

*:not(.accent) {
  /* transition-delay: 2s !important; */
}
.accent {
  transition-delay: 0s !important;
}
</style>
