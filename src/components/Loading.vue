<template>
  <div class="stretched">
    <b-container>
      <b-row>
        <b-col md="2" class="text-center mx-auto" style="margin-top:25%">
          <img class="img-fluid glow" src="../assets/icon.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Loading"
};
</script>
<style>
.stretched {
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
}
.glow {
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }
  to {
    filter: drop-shadow(0px 0px 15px var(--lightened-first));
    -webkit-filter: drop-shadow(0px 0px 15px var(--lightened-first));
  }
}
</style>
