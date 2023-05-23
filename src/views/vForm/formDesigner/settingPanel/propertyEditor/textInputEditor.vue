<template>
<el-form-item :prop="props.value" :label="props.label" :rules="nameRequiredRule">
    <el-input v-model="props.optionModel[props.label]"></el-input>
</el-form-item>
</template>

<script setup lang="ts">
let props = defineProps<{
    label:string,
    value:string,
    optionModel:object
}>()
let nameRequiredRule = [{ required: true, message: 'name required' }]
</script>
<script lang="ts">
export default {
    name:"text-input-editor"
}
</script>

<style scoped>

</style>