import { createApp } from 'vue'
import App from './App.vue'

import {setupBus} from '@/plugins/eventBus'
import {setupGlobalProperties} from '@/plugins/addGlobalProperties'

import '@/style/index.less'
import 'animate.css';


const app = createApp(App)

app.use(setupBus)
app.use(setupGlobalProperties)

app.mount('#app')
