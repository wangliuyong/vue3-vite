import { App,createVNode, VNode,render } from "vue";
import { createPinia,PiniaPluginContext } from 'pinia';

export function setupPinia(app: App) {

  const store = createPinia()
  const piniaPlugin = (context:PiniaPluginContext) => {
    const {store} = context
    console.log('store-----',store);
  }

  store.use(piniaPlugin)

  app.use(store);
}