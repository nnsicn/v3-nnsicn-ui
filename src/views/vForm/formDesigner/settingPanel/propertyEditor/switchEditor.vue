<template>
<el-form-item :prop="props.value" :label="props.label">
    <el-switch v-model="props.optionModel[props.label]"></el-switch>
</el-form-item>
</template>

<script setup lang="ts">
let props = defineProps<{
    label:string,
    value:string,
    optionModel:object
}>()
</script>
<script lang="ts">
export default {
    name:"switch-editor"
}
</script>

<style scoped>

</style>