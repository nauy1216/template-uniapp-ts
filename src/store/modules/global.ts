import { Module, VuexModule, Mutation, getModule } from "vuex-module-decorators";
import store from "@/store";

if (store.hasModule("global")) {
  store.unregisterModule("global");
}

@Module({ name: "global", dynamic: true, namespaced: true, store })
export default class GlobalModule extends VuexModule {
  static module() {
    return getModule(GlobalModule);
  }

  fontSizeSetting = 0;
  model = "";
  screenHeight = 0;
  screenWidth = 0;
  statusBarHeight = 0;
  system = "";
  windowHeight = 0;
  windowWidth = 0;

  @Mutation
  getSystemInfoSync() {
    const info = uni.getSystemInfoSync();
    console.log(info, "info");
    this.fontSizeSetting = info.fontSizeSetting;
    this.model = info.model;
    this.screenHeight = info.screenHeight;
    this.screenWidth = info.screenWidth;
    this.statusBarHeight = info.statusBarHeight;
    this.system = info.system;
    this.windowHeight = info.windowHeight;
    this.windowWidth = info.windowWidth;
  }
}
