import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.less'
import 'animate.css';
import {setupBus} from '@/plugins/eventBus'

const app = createApp(App)

app.use(setupBus)

app.mount('#app')
