import Vue from "vue";
import App from "./App.vue";
import request from "@/api/request";
import uView from "uview-ui";
import store from "@/store";
import storeModules from "@/store/modules";

Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$http = request;
Vue.prototype.$state = storeModules;

new App({
  store
}).$mount();
