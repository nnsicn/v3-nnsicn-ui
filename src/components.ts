import type { Component } from 'vue' //import type 是用来协助进行类型检查和声明的，在运行时是完全不存在的。
import Select from "./components/input/select.vue";
interface componentsFormat {
    [key: string]: Component
}
const components: componentsFormat = {
    Select
}

export default components
