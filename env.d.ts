/// <reference types="vite/client" />

// 创建路由提示 --找不到模块“@/views/XXX.vue”或其相应的类型声明。
// 出现这个问题的原因大概就是：ts只支持导出导入模块，但是vue不是模块，我们需要申明一下vue是个模块
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }