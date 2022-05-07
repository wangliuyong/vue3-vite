import { App } from "vue";
import mitt from "mitt";

const Mitt = mitt();

declare module "vue" {
  export interface componentCustomProperties {
    $bus: typeof Mitt;
  }
}

export function setupStore(app: App) {
  // app.use()
  const Mitt = mitt();
  app.config.globalProperties.$bus = Mitt;
}
