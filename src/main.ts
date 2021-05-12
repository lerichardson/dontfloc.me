import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import browserDetect from "vue-browser-detect-plugin";

Vue.config.productionTip = false;
Vue.use(browserDetect);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#__app");
