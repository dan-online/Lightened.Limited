<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>
<style>
:root {
  --lightened-first: rgb(113, 222, 162);
  --lightened-second: rgb(42, 79, 61);
  --lightened-third: rgb(90, 196, 114);
  --lightened-black: rgb(0, 0, 0);
}
html,
body {
  background-color: var(--lightened-black) !important;
  font-family: "Manrope", sans-serif !important;
  color: #fff !important;
}
.accent,
a {
  color: var(--lightened-first) !important;
}
.accent-second {
  color: var(--lightened-first) !important;
}
.accent-third {
  color: var(--lightened-first) !important;
}
</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  mounted() {
    window.app = this;
  },
  components: {
    Navbar
  }
};
</script>
