require("./bootstrap");

import Vue from "vue";
import moment from "moment";
import VueRouter from "vue-router";
import Index from "./Index";
import router from "./routes";
import StarRating from "./shared/components/StarRating";

window.Vue = require("vue/dist/vue.js");
Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index,
    },
});
