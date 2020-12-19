import request from "@/api/request";
declare module "vue/types/vue" {
  interface Vue {
    $http: typeof request;
  }
}
