<template>
    <el-select v-model="currentValue" :disabled="disabled" class="m-2" placeholder="Select" @change="handleChange">
        <el-option v-for="option in options" :value="option.value" :label="option.key"></el-option>
    </el-select>
</template>
<script lang="ts">
export default {
    name:"enum-select"
}
</script>
<script setup lang="ts">
import { ref, computed, } from "vue";
import { enumList } from "../../ENUM";
const emits = defineEmits(["update:value", "change"])
const props = defineProps({
    enum: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: null
    },
    disabled:{
        type:Boolean,
        default:false
    }
})
let currentValue = ref<number | string>(props.value)
const options = computed<Array<{ key: string, value: number }>>(() => enumList[props.enum])
function handleChange(val: number) {
    emits("change", val)
}
</script>

<style scoped></style>