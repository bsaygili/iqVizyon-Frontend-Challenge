import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
// import ApexChart
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(store).use(router).use(VueApexCharts).mount("#app");
