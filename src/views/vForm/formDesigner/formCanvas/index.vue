<template>
    <div class="form-canvas">
        <el-main>
            <el-scrollbar>
                <el-form inline :model="formModel">
                    <draggable :list="designer.widgetList" class="list-group" ghost-class="ghost" item-key="id">
                        <template #item="{ element: item, index }">
                            <component :is="item.type" :field="item" :designer="designer" :key="item.id"
                                :parent-list="designer.widgetList" :index-of-parent-list="index" :parent-widget="null"
                                :design-state="true"></component>
                        </template>
                    </draggable>
                </el-form>
            </el-scrollbar>
        </el-main>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { CreateDesigner } from "../designer"
let props = defineProps<{ designer: object }>()
let designer: CreateDesigner = ref();
let formModel:any = ref({});
designer.value = props.designer


</script>
<script lang="ts">
import comps from "./components/index"
export default {
    components: {
        ...comps
    }
}
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

        .el-form {
            padding: 5px;
            // height: 100%;
        }
    }
}
</style>