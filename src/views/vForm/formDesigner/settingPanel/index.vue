<template>
    <el-tabs v-model="tabName" class="widget-panel-index">
        <el-scrollbar>
            <el-tab-pane label="User" name="componentLib">
                <template #label>
                    <span class="mr-5">组件设置</span>
                    <i class="iconfont icon-htmlbianjiqi"></i>
                </template>
                <el-collapse v-model="collapseName">
                    <el-collapse-item title="Consistency" name="1">
                        <template #title>
                            <strong class="mr-5">常见属性</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                    <el-collapse-item title="Consistency" name="2">
                        <template #title>
                            <strong class="mr-5">高级属性</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                    <el-collapse-item title="Consistency" name="3">
                        <template #title>
                            <strong class="mr-5">事件属性</strong>
                            <i class="iconfont icon-htmlbianjiqi"></i>
                        </template>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
        </el-scrollbar>
        <el-tab-pane label="Config" name="formLib">
            <template #label>
                <span class="mr-5">表单设置</span>
                <i class="iconfont icon-htmlbianjiqi"></i>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
let tabName = ref<string>("componentLib")
let collapseName = ref<Array<string>>(["1","2","3"])
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
    }
}
</style>