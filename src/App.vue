<script lang="ts">
import Vue from "vue";
import { Log } from "@/utils";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    Log.i("App Launch");
  },
  onShow() {
    Log.i("App Show");
  },
  onHide() {
    Log.i("App Hide");
  },
  onError(err) {
    Log.i("onError", err);
  },
  onPageNotFound(option) {
    Log.i("onPageNotFound", option);
  },
  onThemeChange() {
    Log.i("onThemeChange");
  }
});
</script>

<style>
/*每个页面公共css */
</style>
