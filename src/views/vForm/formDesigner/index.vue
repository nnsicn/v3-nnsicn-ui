<template>
    <div class="common-layout form-designer">
        <el-container>
            <el-aside class="components">
                <widget-panel :designer="designer"></widget-panel>
            </el-aside>
            <el-main @click="handleClick">
                <toolbar-panel :designer="designer"></toolbar-panel>
                <form-canvas :designer="designer"></form-canvas>
            </el-main>
            <el-aside>
                <setting-panel :designer="designer" :selected-widget="designer.selectedWidget"
                       :form-config="designer.formConfig" :global-dsv="globalDsv"></setting-panel>
            </el-aside>
        </el-container>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import widgetPanel from "./widgetPanel/index.vue";
import toolbarPanel from "./toolbarPanel/index.vue"
import formCanvas from "./formCanvas/index.vue"
import settingPanel from "./settingPanel/index.vue";
// import {createDesigner} from "./designer"
import createDesigner from "./designer"
let props = defineProps<{
    globalDsv:object
}>()
let globalDsv = ref(props.globalDsv)
let designer = ref(createDesigner)
const handleClick =()=>{
    // console.log(createDesigner);
    
}

</script>
  
<style lang="scss">
.form-designer {
    width: 100%;
    height: 100%;

    .el-container {
        height: 100%;

        .components {
            width: 260px;
        }

        .el-main {
            padding: 0px;
        }
    }
}
</style>