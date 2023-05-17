import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import enum from "./components/input/enum.vue"
app.component("enum", enum )