import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies'
import "@/styles/app.scss";

createApp(App).use(router).use(Toaster).use(VueCookies).mount("#app");
