import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { LayoutPlugin, NavbarPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueParticles from "vue-particles";
Vue.use(VueParticles);

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
