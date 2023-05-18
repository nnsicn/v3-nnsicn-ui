
import copy from "./copy"
import type { App,Directive } from 'vue';
interface d{
    [key:string]:Directive
}
const directivesList:d = {
    copy:copy,
}
// app.use(plugin, options)
// 其中 plugin 表示要传递的插件对象， options 参数是可选的，表示选项配置，
// install 方法的定义就插件对象里面，install 方法会在引入插件时自动被 vue 调用，
// 并传参 vue 实例和 options
const directives = {
    install: (app:App) => {
        Object.keys(directivesList).forEach(t => {
            app.directive(t, directivesList[t])
        })
    }
}
export default directives
/**
 * 第二种写法
 * import type { App } from 'vue';
 * import { setupElCopyDirective } from './copy';
 * export function setupGlobDirectives(app: App) {
 *      setupElCopyDirective(app);
 * }
 */