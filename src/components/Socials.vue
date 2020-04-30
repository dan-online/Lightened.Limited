<template>
  <div>
    <a
      class="icon mr-4"
      :class="{
        'hover-first': social.hoverColor === 'var(--lightened-first)',
        'hover-second': social.hoverColor != 'var(--lightened-first)'
      }"
      :key="social.name"
      :aria-label="social.name"
      v-for="social in socials"
      :href="social.url"
      :style="social.color ? 'color:' + social.color + '' : ''"
    >
      <fa :icon="social.icon"></fa>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    socials: {
      default: () => [],
      type: Array
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 30px;
  transition: all 1s;
}
</style>
