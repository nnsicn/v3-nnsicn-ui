<template>
<el-form-item :prop="props.value" :label="props.label">
    <el-input v-model="props.optionModel[props.label]" type="number"></el-input>
</el-form-item>
</template>

<script setup lang="ts">
let props = defineProps<{
    label:string,
    value:string,
    optionModel:object,
    designer:object,
    selectedWidget:object
}>()
</script>
<script lang="ts">
export default{
    name:"number-input-editor"
}
</script>

<style scoped>

</style>