<template>
  <div>
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
  }
};
</script>
<style>
.icon {
  font-size: 30px;
  transition: all 1s;
}
.hover-first:hover {
  color: var(--lightened-first) !important;
}
</style>
