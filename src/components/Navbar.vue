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
        <h3 style="display:inline" class="ml-3 pt-4">{{ info.name }}</h3>
       <button @click="toggle" class="float-right m-4">
         <fa icon="bars"></fa>
       </button>
      </b-col>
    </b-row>
    <b-row :class="open ? 'open' : ''" id="collapse">
       <button @click="() => $emit('scroll', 'home')" class="ml-4 lightened">
          Home
        </button>
        <button
          @click="() => $emit('scroll', 'projects')"
          class="ml-4 lightened"
        >
          Projects
        </button>
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
  },
  data() {
    return {
      open:false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>
<style scoped>
#nav,
.container {
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
  height: 0px!important;
  opacity: 0;
  transition: all 1s;
}
#collapse.open {
  height:100px;
  opacity: 1;
}
button.float-right {
  font-size: 22px;
  color: var(--lightened-first)
}
</style>
