<template>
<el-form-item prop="name" label="name" :rules="nameRequiredRule">
    <el-input v-model="props.optionModel.name" @change="handleChange"></el-input>
</el-form-item>
</template>

<script setup lang="ts">
import type {designerFormat} from "../../widgetPanel/tsInterface"
let props = defineProps<{
    label:string,
    value:string,
    optionModel:object,
    designer:designerFormat,
    selectedWidget:object
}>()
let nameRequiredRule = [{ required: true, message: 'name required' }]
const handleChange = (val:string)=>{
    let exist = props.designer.widgetList.find(t=>t.option.name===val);
    if(exist){

    }
}
</script>
<script lang="ts">
export default {
    // 这个组件只给name属性使用
    name:"name-input-editor"
}
</script>

<style scoped>

</style>