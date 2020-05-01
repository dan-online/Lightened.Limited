import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

import { LayoutPlugin, NavbarPlugin, ImagePlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

import VueParticles from "vue-particles";
Vue.use(VueParticles);

import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCodeBranch,
  faEnvelope,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faPatreon,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faCodeBranch,
  faFacebook,
  faTwitter,
  faGithub,
  faPatreon,
  faDiscord,
  faEnvelope,
  faTimes
);
Vue.component("fa", FontAwesomeIcon);

if (process.env.NODE_ENV == "production") {
  Sentry.init({
    dsn: process.env.DSN,
    release: "lightenedlimited@" + process.env.COMMIT_REF,
    integrations: [new VueIntegration({ Vue, attachProps: true })]
  });
  Sentry.captureEvent(new Error("test"));
}

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(ImagePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
