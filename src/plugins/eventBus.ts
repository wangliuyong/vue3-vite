import { App } from "vue";
import mitt from "mitt";

const Mitt = mitt();

declare module "vue" {
  export interface componentCustomProperties {
    $bus: typeof Mitt;
  }
}

export function setupBus(app: App) {
  // console.log(333,app);
  
  // app.use()
  const Mitt = mitt();

  app.config.globalProperties.$bus = Mitt;
}
