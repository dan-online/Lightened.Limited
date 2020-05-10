<template>
  <div id="nav" :class="'p-2 ' + (open ? 'open' : '')">
    <b-row>
      <b-col md="12">
        <img
          class="img-fluid"
          alt="LightenedLimited logo"
          style="height:80px!important"
          src="../../public/icon.png"
        />
        <h3 style="display:inline" class="ml-3 pt-4">{{ info.name }}</h3>
        <button @click="toggle" class="float-right m-4">
          <fa icon="bars"></fa>
        </button>
      </b-col>
    </b-row>
    <b-row :class="open ? 'open' : ''" class="mt-3" id="collapse">
      <button
        v-for="ref in Object.keys($parent.$refs).map((x) => ({
          name: x,
        }))"
        :key="ref.name"
        @click="() => $emit('scroll', ref.name) && (open = !open)"
        class="ml-4 lightened"
      >
        {{ ref.name[0].toUpperCase() + ref.name.slice(1) }}
      </button>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
<style scoped>
#nav {
  transition: all 1s ease-in-out !important;
  transition-delay: 0s !important;
  min-height: 100px;
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
#collapse {
  height: 0px !important;
  opacity: 0;
  position: fixed;
  transition: all 1s;
}
#collapse.open {
  transition-delay: 1s;
}
#nav.open {
  min-height: 150px !important;
}
.open {
  opacity: 1 !important;
}
button.float-right {
  font-size: 22px;
  color: var(--lightened-first);
}
</style>
