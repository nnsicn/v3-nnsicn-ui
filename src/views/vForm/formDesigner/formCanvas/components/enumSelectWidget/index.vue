<template>
    <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
        :parent-widget="parentWidget" :sub-form-row-index="subFormRowIndex">
        <enum-select enum="sexEnum" :disabled="options.disabled"></enum-select>
    </form-item-wrapper>
</template>


<script setup lang="ts">
import { ref } from "vue"
import FormItemWrapper from '../formItemWrapper/index.vue'
const props = withDefaults(defineProps<{
    field: any,
    designer: any,
    key: any,
    parentList: any,
    indexOfParentList: any,
    parentWidget: any,
    designState: boolean,
    subFormRowIndex: any
}>(), { subFormRowIndex: -1 })
let options=props.field.options
let rules = ref<Array<object>>([])
</script>
<script lang="ts">
export default {
    name: "enum-select-widget"
}
</script>
<style scoped></style>