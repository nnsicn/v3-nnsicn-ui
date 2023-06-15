import type { Component } from 'vue' //import type 是用来协助进行类型检查和声明的，在运行时是完全不存在的。
import enumSelect from "./components/input/select.vue";
import jyTable from "./components/table/index.vue";
import draggable from 'vuedraggable'
interface componentsFormat {
    [key: string]: Component
}
const components: componentsFormat = {
    "enum-select":enumSelect,
    draggable,
    jyTable
}
let comps = {
    draggable
}
const modules = import.meta.globEager('./components/**/*.vue')
console.log(modules);
for (const path in modules) {
    console.log("path",path);
    let cname = modules[path].default.name
    console.log(cname);
    
    comps[cname] = modules[path].default
}

export default comps

// let comps = {}

// const modules = import.meta.globEager('./**/*.vue')
// console.log(modules);

// for (const path in modules) {
//   console.log("path",path);
//   let cname = modules[path].default.name
//   console.log(cname);
  
//   comps[cname] = modules[path].default
// }

// export default comps
