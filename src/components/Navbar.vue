<template>
  <div id="nav" class="p-2">
    <b-row>
      <b-col cols="4" md="2">
        <img
          class="img-fluid"
          style="height:80px!important"
          src="../../public/icon.png"
        />
      </b-col>
      <b-col cols="4"> </b-col>
    </b-row>
  </div>
</template>
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
  border: var(--lightened-first) 1px solid;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>
