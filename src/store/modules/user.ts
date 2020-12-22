import { Module, VuexModule, getModule } from "vuex-module-decorators";
import store from "@/store";

if (store.hasModule("user")) {
  store.unregisterModule("user");
}

@Module({ name: "user", dynamic: true, namespaced: true, store })
export default class UserModule extends VuexModule {
  static module() {
    return getModule(UserModule);
  }

  name = "";
  phone = "";
}
