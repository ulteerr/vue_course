require("./bootstrap");

import Vue from "vue";
import moment from "moment";
import VueRouter from "vue-router";
import Index from "./Index";
import router from "./routes";
import FatalError from "./shared/components/FatalError";
import StarRating from "./shared/components/StarRating";
import Success from "./shared/components/Success";
import ValidationErrors from "./shared/components/ValidationErrors";

window.Vue = require("vue/dist/vue.js");
Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index
    }
});