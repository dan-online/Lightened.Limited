<template>
  <div id="app">
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
}
</style>
<script>
export default {
  name: "App"
};
</script>
