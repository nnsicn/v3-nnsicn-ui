<template>
    <div class="form-item-wrapper" :style="{width:width+'px'}">
        <el-form-item :label="label" :label-width="labelWidth + 'px'" :prop="getPropName()" @click="selectField" :class="[selected?'selected':'']">
            <template #label>
                <span>{{ label1 }}</span>
                <i v-show="!props.field.options.labelHidden">{{ label }}</i>
            </template>
            <slot></slot>
        </el-form-item>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
const props = defineProps<{
    field: any,
    designer: any,
    designState: boolean,
    rules: any,
    subFormRowIndex: any,
    parentWidget: any
}>()
// 方法
const getPropName = () => {
    if (subFormItemFlag && !props.designState) {
        return subFormName + "." + props.subFormRowIndex + "." + props.field.options.name + ""
    } else {
        return props.field.options.name
    }
}
const selectField = () => {
    console.log(12);
    if (!!props.designer) {
        props.designer.setSelected(props.field)
        props.designer.emitEvent('field-selected', props.parentWidget)  //发送选中组件的父组件对象
    }

}
// 计算属性
let label = computed(() => {
    if (!!props.field.options.labelHidden) {
        return ''
    }
    return props.field.options.label
})
let label1 = props.field.options.label
let labelWidth = computed(() => {
    if (!!props.field.options.labelHidden) {
        return 0
    }
    if (!!props.field.options.labelWidth) {
        return props.field.options.labelWidth
    }
    // if (!!props.designer) {
    //   return props.designer.formConfig.labelWidth
    // } else {
    //   return props.formConfig.labelWidth
    // }
})
let width = computed(() => {
        return props.field.options.width
})
let subFormItemFlag = computed(() => {
    return !!props.parentWidget ? props.parentWidget.type === 'sub-form' : false
})
let selected = computed(() => {
    return props.designer && props.field.id === props.designer.selectedId;
})
</script>
<script lang="ts">
export default {
    name: "form-item-wrapper"
}
</script>

<style lang="scss">
.form-item-wrapper {
    display: inline-block;
    position: relative;
    width: fit-content;
    // dotted:点状  dashed:虚线   solid:实线
    &.selected{
        outline:1px dashed #000;
    }

    .el-form-item {
        .el-form-item__label {
            span {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
                padding: 0px 5px;
                background-color: #409EFF;
                cursor: move;
                color: #fff;
                font-size: 12px;
                text-align: center;
                line-height: 20px;

                &:hover {
                    opacity: .7;
                }
            }
            span:hover{
                display: block;
            }
        }
    }
}
</style>