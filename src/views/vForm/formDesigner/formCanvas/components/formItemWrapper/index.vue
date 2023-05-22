<template>
    <div class="form-item-wrapper" :style="{width:width+'px'}">
        <el-form-item :label="label" :label-width="labelWidth + 'px'" :prop="getPropName()" @click="selectField">
            <template #label>
                <span :style="{ width: labelWidth + 'px' }">{{ label }}</span>
                {{ label }}
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
</script>
<script lang="ts">
export default {
    name: "form-item-wrapper"
}
</script>

<style lang="scss">
.form-item-wrapper {
    position: relative;
    // width: 200px;
    border: 1px solid #000;

    .el-form-item {
        .el-form-item__label {
            span {
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
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
        }
    }
}
</style>