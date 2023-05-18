// import { ElMessage } from "element-plus";
import type { App, Directive, ObjectDirective, DirectiveBinding } from 'vue';
let copyData: string = ""
const copy: ObjectDirective = {
    // 在绑定元素的 attribute 前 或事件监听器应用前调用
    // created(el:Element, binding, vnode, prevVnode) {

    // },
    // 在元素被插入到 DOM 前调用
    beforeMount(el: Element, binding: DirectiveBinding<any>) {
        copyData = binding.value
        el.addEventListener("click", handleCopy);
    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    // mounted(el:Element, binding, vnode, prevVnode) { },
    // 绑定元素的父组件更新前调用
    // beforeUpdate(el, binding, vnode, prevVnode) { },
    // 在绑定元素的父组件及他自己的所有子节点都更新后调用
    updated(el: Element, binding: DirectiveBinding<any>) {
        copyData = binding.value
    },
    // 绑定元素的父组件卸载前调用
    beforeUnmount(el: Element, binding: DirectiveBinding<any>) {
        // el.removeEventListener("click");
    },
    // 绑定元素的父组件卸载后调用
    // unmounted(el:Element, binding, vnode, prevVnode) { }
}
function handleCopy() {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/clipboard
    navigator.clipboard.writeText(copyData).then(
        (res) => {
            // ElMessage({
            //     showClose: true,
            //     message: "copy成功",
            //     type: "success",
            // });
        },
        (error) => {
            // ElMessage({
            //     showClose: true,
            //     message: error,
            //     type: "error",
            // });
        }
    );
}
// 第二种写法使用该函数
// export function setupElCopyDirective(app: App) {
//     app.directive('copy', copy);
// }
export default copy