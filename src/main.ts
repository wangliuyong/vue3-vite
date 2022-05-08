import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia';
import { setupBus } from "@/plugins/eventBus";
import { setupGlobalProperties } from "@/plugins/addGlobalProperties";
import { setupLoading } from "@/plugins/loading";

import "@/style/index.less";
import "animate.css";

const app = createApp(App);

app.use(createPinia());
app.use(setupBus);
app.use(setupGlobalProperties);
app.use(setupLoading);

app.mount("#app");
