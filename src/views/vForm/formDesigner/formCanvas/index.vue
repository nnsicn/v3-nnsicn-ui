<template>
    <div class="form-canvas">
        <el-main>
            <el-scrollbar>
                <draggable :list="designer.widgetList" class="list-group" ghost-class="ghost" item-key="id">
                    <template #item="{ element: item, index }">
                        <component :is="item.type"></component>
                    </template>
                </draggable>
            </el-scrollbar>
        </el-main>
    </div>
</template>

<script setup lang="ts">
import { ref ,watch} from "vue";
import type{CreateDesigner} from "../designer"
// import createDesigner from "../designer"
let props = defineProps<{designer:object}>()
let designer:CreateDesigner = ref();
designer.value = props.designer
// let componentData = ref([
//     {
//         formItemFlag: true,
//         icon: "textarea-field",
//         id: "textarea76137",
//         key: 19957,
//         options: {
//             columnWidth: "200px",
//             customClass: [],
//             defaultValue: "",
//             disabled: false,
//             hidden: false,
//             label: "textarea",
//             labelAlign: "",
//             labelHidden: false,
//             labelIconClass: null,
//             labelIconPosition: "rear",
//             labelTooltip: null,
//             labelWidth: null,
//             maxLength: null,
//             minLength: null,
//             name: "textarea76137",
//             onBlur: "",
//             onChange: "",
//             onCreated: "",
//             onFocus: "",
//             onInput: "",
//             onMounted: "",
//             onValidate: "",
//             placeholder: "",
//             readonly: false,
//             required: false,
//             requiredHint: "",
//             rows: 3,
//             showWordLimit: false,
//             size: "",
//             validation: "",
//             validationHint: "",
//         },
//         type: "textarea",

//     }
// ])


</script>

<style lang="scss" scoped>
.form-canvas {
    width: 100%;
    height: calc(100% - 40px);
    background-color: #f1f2f3;
    padding: 10px;

    .el-main {
        height: 100%;
        background-color: #fff;
    }
}
</style>