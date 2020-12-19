import request from "@/api/request";
import state from "@/store/modules";
declare module "vue/types/vue" {
  interface Vue {
    $http: typeof request;
    $state: typeof state;
  }
}
