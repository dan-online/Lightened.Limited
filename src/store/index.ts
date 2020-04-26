import Vue from "vue";
import Vuex from "vuex";

const importer = () => import("../../LightenedLimited");
const cache = JSON.parse(localStorage.lightened_limited || "{}");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lightened: cache
  },
  getters: {
    lightened(state) {
      importer().then(directData => {
        if (
          !state.lightened.basic ||
          state.lightened.basic.version != directData.basic.version
        ) {
          state.lightened = directData;
          console.log("updated");
          if (process.env.NODE_ENV === "production") {
            localStorage.LightenedLimited = directData;
          }
        }
      });
      return state.lightened;
    }
  }
});
