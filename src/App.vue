<script lang="ts">
import Vue from "vue";
import { Log } from "@/utils";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    Log.i("App Launch");
    this.init();
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
  },
  methods: {
    init() {
      this.$state.global.getSystemInfoSync();
    }
  }
});
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
</style>
