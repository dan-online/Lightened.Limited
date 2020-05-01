<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$route;
  }
};
</script>
<style>
/* @keyframes grider {
  0% {
    background-image: linear-gradient(
        45deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(74deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  2% {
    background-image: linear-gradient(
        46deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(76deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  4% {
    background-image: linear-gradient(
        47deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(78deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  6% {
    background-image: linear-gradient(
        48deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(80deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  8% {
    background-image: linear-gradient(
        49deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(82deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  10% {
    background-image: linear-gradient(
        50deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(84deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  12% {
    background-image: linear-gradient(
        51deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(86deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  14% {
    background-image: linear-gradient(
        52deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(88deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  16% {
    background-image: linear-gradient(
        53deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  18% {
    background-image: linear-gradient(
        54deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(92deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  20% {
    background-image: linear-gradient(
        54deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(94deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  22% {
    background-image: linear-gradient(
        55deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(96deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  24% {
    background-image: linear-gradient(
        56deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(98deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  26% {
    background-image: linear-gradient(
        57deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(100deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  28% {
    background-image: linear-gradient(
        58deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(102deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  30% {
    background-image: linear-gradient(
        59deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(104deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  32% {
    background-image: linear-gradient(
        60deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(106deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  34% {
    background-image: linear-gradient(
        61deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(108deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  36% {
    background-image: linear-gradient(
        62deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(110deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  38% {
    background-image: linear-gradient(
        63deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(112deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  40% {
    background-image: linear-gradient(
        64deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(114deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  42% {
    background-image: linear-gradient(
        64deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(116deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  44% {
    background-image: linear-gradient(
        65deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(118deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  46% {
    background-image: linear-gradient(
        66deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(120deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  48% {
    background-image: linear-gradient(
        67deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(122deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  50% {
    background-image: linear-gradient(
        68deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(124deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  52% {
    background-image: linear-gradient(
        69deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(126deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  54% {
    background-image: linear-gradient(
        70deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(128deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  56% {
    background-image: linear-gradient(
        71deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(130deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  58% {
    background-image: linear-gradient(
        72deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(132deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  60% {
    background-image: linear-gradient(
        73deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(134deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  62% {
    background-image: linear-gradient(
        73deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(136deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  64% {
    background-image: linear-gradient(
        74deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(138deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  66% {
    background-image: linear-gradient(
        75deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(140deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  68% {
    background-image: linear-gradient(
        76deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(142deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  70% {
    background-image: linear-gradient(
        77deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(144deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  72% {
    background-image: linear-gradient(
        78deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(146deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  74% {
    background-image: linear-gradient(
        79deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(148deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  76% {
    background-image: linear-gradient(
        80deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(150deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  78% {
    background-image: linear-gradient(
        81deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(152deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  80% {
    background-image: linear-gradient(
        82deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(154deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  82% {
    background-image: linear-gradient(
        82deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(156deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  84% {
    background-image: linear-gradient(
        83deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(158deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  86% {
    background-image: linear-gradient(
        84deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(160deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  88% {
    background-image: linear-gradient(
        85deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(162deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  90% {
    background-image: linear-gradient(
        86deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(170deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  92% {
    background-image: linear-gradient(
        87deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(172deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  94% {
    background-image: linear-gradient(
        88deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(174deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  96% {
    background-image: linear-gradient(
        88deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(176deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  98% {
    background-image: linear-gradient(
        89deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(178deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
  100% {
    background-image: linear-gradient(
        90deg,
        rgba(128, 128, 128, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(180deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  }
} */

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
button,
button:focus {
  background: none;
  outline: none !important;
  border: none;
}
button:focus,
button:hover {
  opacity: 0.7;
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

.loadedBackground {
  background-image: linear-gradient(
      to right,
      rgba(128, 128, 128, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
}
</style>
<script>
export default {
  name: "App",
  mounted() {
    window.app = this;
  }
};
</script>
