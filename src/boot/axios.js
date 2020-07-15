import Vue from "vue";
import axios from "axios";

const loc = location;
const path = loc.origin + loc.pathname;
const ProdServer = path;

if (process.env.PROD) axios.defaults.baseURL = ProdServer;
// axios.defaults.withCredentials = true

Vue.prototype.$axios = axios;

export { axios };
