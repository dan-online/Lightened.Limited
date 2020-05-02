<template>
  <div id="nav" class="p-2">
    <b-row>
      <b-col md="12">
        <img
          class="img-fluid"
          alt="LightenedLimited logo"
          style="height:80px!important"
          src="../../public/icon.png"
        />
        <h3 style="display:inline" class="ml-3 pt-3">{{ info.name }}</h3>
        <button @click="() => $emit('scroll', 'home')" class="ml-4 lightened">
          Home
        </button>
        <button
          @click="() => $emit('scroll', 'projects')"
          class="ml-4 lightened"
        >
          Projects
        </button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      default: () => ({}),
      type: Object
    }
  }
};
</script>
<style scoped>
#nav,
.container {
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9) !important;
  z-index: 9999999;
  border-bottom: var(--lightened-first) 1px solid;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
