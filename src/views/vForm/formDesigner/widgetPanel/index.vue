<template>
    <el-tabs v-model="tabName" class="widget-panel-index">
        <el-scrollbar>
            <el-tab-pane label="User" name="componentLib">
                <template #label>
                    <span class="mr-5">组件库</span>
                    <i class="iconfont icon-htmlbianjiqi"></i>
                </template>
                <el-collapse v-model="collapseName">
                    <el-collapse-item title="Consistency" name="1">
                        <template #title>
                            <strong class="mr-5">容器</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                    <el-collapse-item title="Consistency" name="2">
                        <template #title>
                            <strong class="mr-5">基础字段</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                        <draggable tag="ul" :list="basicField" class="list-group" ghost-class="ghost" item-key="id"
                            :sort="false" :group="{ name: 'dragGroup', pull: 'clone', put: false }" :clone="handleContainerWidgetClone"
                           :move="checkContainerMove" @end="onContainerDragEnd">
                            <template #item="{ element: fld }">
                                <li class="field-widget-item" @dblclick="addFieldByDbClick(fld)">{{ fld.type }}</li>
                            </template>
                        </draggable>
                    </el-collapse-item>
                    <el-collapse-item title="Consistency" name="3">
                        <template #title>
                            <strong class="mr-5">高级字段</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                    <el-collapse-item title="Consistency" name="4">
                        <template #title>
                            <strong class="mr-5">自定义字段</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
        </el-scrollbar>
        <el-tab-pane label="Config" name="formLib">
            <template #label>
                <span class="mr-5">表单模板</span>
                <i class="iconfont icon-htmlbianjiqi"></i>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { basicFields } from "./widgetsConfig";
import type { basicFormat } from "./tsInterface";
import type{CreateDesigner} from "../designer"
let props = defineProps<{designer:object}>()
let basicField = ref<Array<basicFormat>>();
basicField.value = basicFields;
// let basicField:Array<basicFields> = basicFields
let designer:CreateDesigner = props.designer
const onContainerDragEnd = () => {
    console.log(2);
    
 }
const checkContainerMove = () => {
    console.log(1);
}
// 基础字段item双击
const addFieldByDbClick = (container:basicFormat) => {
    designer.addContainerByDbClick(container)
}
const handleContainerWidgetClone = (origin:basicFormat) => {
    console.log(origin);
}


let tabName = ref<string>("componentLib")
let collapseName = ref<Array<string>>(["1"]);
</script>
<style lang="scss">
.widget-panel-index {
    padding-left: 10px;
    height: 100%;

    // tab标题
    .el-tabs__header {
        margin-bottom: 0px;

        .el-tabs__nav {
            width: 100%;

            .el-tabs__item {
                width: 50%;

            }
        }
    }

    // tab主体
    .el-tabs__content {
        height: calc(100% - 40px);

        .el-scrollbar .el-collapse-item .el-collapse-item__wrap {
            .el-collapse-item__content {
                ul {
                    width: 100%;

                    li {
                        display: inline-block;
                        width: 45%;
                        height: 33px;
                        line-height: 33px;
                        border: 1px solid #e8e9eb;
                        border-radius: 4px;
                        padding-left: 5px;
                        margin-right: 5%;
                        cursor: move;
                        user-select: none;
                    }
                }
            }
        }
    }
}</style>