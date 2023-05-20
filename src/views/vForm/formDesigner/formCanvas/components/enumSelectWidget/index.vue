<template>
    <enum-select></enum-select>
</template>


<script setup lang="ts">
const props = defineProps<{
    field:any,
    designer:any,
    key:any,
    parentList:any,
    indexOfParentList:any,
    parentWidget:any,
    designState:boolean
}>()
</script>
<script lang="ts">
export default {
    name:"enum-select-widget"
}
</script>
<style scoped>

</style>