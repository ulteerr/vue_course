require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'
import moment from "moment";

import Index from "./Index";
import router from "./routes";
import FatalError from "./shared/components/FatalError";
import StarRating from "./shared/components/StarRating";
import Success from "./shared/components/Success";
import ValidationErrors from "./shared/components/ValidationErrors";
import storeDefinition from "./store";


window.Vue = require("vue/dist/vue.js");

Vue.use(VueRouter);
Vue.use(Vuex)


Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store(storeDefinition);


const app = new Vue({
    el: "#app",
    router,
    store,
    components: {
        index: Index
    },
    beforeCreate() {
        this.$store.dispatch("loadStoredState");
    },
});
