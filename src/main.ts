import { createApp } from 'vue'
import App from './App.vue'
import './style/index.less'
import 'animate.css';
import mitt from 'mitt'

const app = createApp(App)

const Mitt = mitt()


declare module 'vue' {
  export interface componentCustomProperties{
    $bus: typeof Mitt
  }

}

app.config.globalProperties.$bus = Mitt

app.mount('#app')
