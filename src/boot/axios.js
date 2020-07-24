import Vue from "vue";
import axios from "axios";

if (process.env.PROD)
  axios.defaults.baseURL = location.origin + location.pathname;

axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;

export { axios };
