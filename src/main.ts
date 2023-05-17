import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)
// 注册全局组件
import globalComponent from "./components"
for (const componentItme in globalComponent) {
    app.component(componentItme, globalComponent[componentItme])
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus);
app.mount('#app')
