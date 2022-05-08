import { createApp } from "vue";
import App from "./App.vue";

import { setupBus } from "@/plugins/eventBus";
import { setupGlobalProperties } from "@/plugins/addGlobalProperties";
import { setupLoading } from "@/plugins/loading";
import { setupPinia } from "@/plugins/pinia";

import "@/style/index.less";
import "animate.css";

const app = createApp(App);


app.use(setupPinia);
app.use(setupBus);
app.use(setupGlobalProperties);
app.use(setupLoading);

app.mount("#app");
