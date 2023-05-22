// vue3全局时间总线
import mitt from 'mitt'
interface eventFormat{
    $on:any,
    $off:any,
    $emit:any,
}
const instance = mitt()
const eventBus:eventFormat={
    $on:null,
    $off:null,
    $emit:null,
}
eventBus.$on = instance.on
eventBus.$off = instance.off
eventBus.$emit = instance.emit

export default eventBus
