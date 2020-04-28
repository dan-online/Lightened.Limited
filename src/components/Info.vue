<template>
  <div>
    <span
      ><a class="mr-1" href="https://github.com/dan-online/Lightened.Limited">
        <fa icon="code-branch"></fa
      ></a>
      with
      <a class="ml-1" href="https://dancodes.online">DanCodes</a></span
    >
    <h1>
      Hi, I'm <span class="accent">{{ info.name }}</span>
    </h1>
    <p>{{ info.about }}</p>
    <a
      class="icon mr-4"
      :key="social.name"
      :aria-label="social.name"
      v-for="social in info.social"
      :href="social.url"
      :style="social.color ? 'color:' + social.color + '!important' : ''"
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
}
</style>
