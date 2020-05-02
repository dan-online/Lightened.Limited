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
  const release =
    "lightenedlimited@" + process.env.COMMIT_REF || process.env.BUILD_ID;
  Sentry.init({
    dsn:
      "https://adbc7f5db01042d8857fe4282de69d17@o193439.ingest.sentry.io/5220675",
    release,
    integrations: [new VueIntegration({ Vue, attachProps: true })]
  });
  console.log("sentry init release " + "lightenedlimited@" + release);
}

Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(ImagePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
console.log("vue init");
