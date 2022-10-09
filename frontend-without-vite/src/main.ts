import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupBackendApi } from "@/backend/api-consume";

setupBackendApi();

createApp(App).use(router).mount("#app");
