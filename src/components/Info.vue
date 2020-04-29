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
    <a
      class="icon mr-4"
      :class="{'hover-first': social.hoverColor === 'var(--lightened-first)', 'hover-second': social.hoverColor != 'var(--lightened-first)'}"
      :key="social.name"
      :aria-label="social.name"
      v-for="social in info.social"
      :href="social.url"
      :style="social.color ? 'color:' + social.color + '' : ''"
    >
      <fa :icon="social.icon"></fa>
    </a>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    info: {}
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
