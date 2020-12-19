import Vue from "vue";
import App from "./App.vue";
import request from "@/api/request";
import uView from "uview-ui";

Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$http = request;

new App().$mount();
