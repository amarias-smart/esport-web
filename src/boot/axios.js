import Vue from "vue";
import axios from "axios";

const DEV = "http://localhost:64575/";
const PROD = location.origin + "/esport/";

const axInst = axios.create({
  baseURL: process.env.PROD ? PROD : DEV,
  withCredentials: true
})

// if (process.env.PROD) { axios.defaults.baseURL = PROD; }
// axios.defaults.withCredentials = true;

Vue.prototype.$axios = axInst;
