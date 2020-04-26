import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { LayoutPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueParticles from "vue-particles";
Vue.use(VueParticles);

Vue.use(LayoutPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
