require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./Index";
import router from "./routes";

window.Vue = require("vue/dist/vue.js");
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index,
    },
});