import Vue from "vue";
import Vuex from "vuex";

import { basic as Basic } from "../../LightenedLimited";

import { projects as Projects } from "../../Projects";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lightened: {},
    projects: {}
  },
  getters: {
    lightened: state => {
      return state.lightened;
    },
    projects: state => {
      console.log(Projects);
      if (state.projects) return state.projects;
      state.projects = Projects;
      console.log(state.projects);
      return Projects;
    }
  },
  mutations: {
    lightened(state, value) {
      console.log("IN MUTATION");
      state.lightened = value;
    }
  },
  actions: {
    getLightened: store => {
      console.log(Basic);
      if (store.getters.lightened.version) return store.getters.lightened;
      store.commit("lightened", Basic);
      return Basic;
    }
  }
});
