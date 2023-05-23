<template>
  <el-tabs v-model="tabName" class="widget-panel-index">
    <el-scrollbar>
      <el-tab-pane label="User" name="componentLib">
        <template #label>
          <span class="mr-5">组件设置</span>
          <i class="iconfont icon-htmlbianjiqi"></i>
        </template>
        <template v-if="!!designer.selectedWidget&&!!designer.selectedWidget.type">
          <el-form
            :model="optionModel"
            size="default"
            label-position="left"
            label-width="90px"
            class="setting-form"
            @submit.prevent
          >
            <el-collapse v-model="collapseName">
              <el-collapse-item title="Consistency" name="1">
                <template #title>
                  <strong class="mr-5">基础属性</strong>
                  <i class="iconfont icon-htmlbianjiqi"></i>
                </template>
                <template v-for="(value, key) in basic" :key="key">
                  <component
                    :is="value"
                    :designer="designer"
                    :selected-widget="selectedWidget"
                    :label="key"
                    :value="key"
                    :option-model="optionModel"
                  ></component>
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
          </el-form>
        </template>
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
import { ref, computed } from 'vue'
import { BASIC_ATTRIBUTES as basic } from './propertyRegister'
let props = defineProps<{
  designer: object
  selectedWidget: object
  formConfig: object
  globalDsv: object
}>()
let tabName = ref<string>('componentLib')
let collapseName = ref<Array<string>>(['1', '2', '3'])
let optionModel = computed({
  get() {
    return props.selectedWidget.options
  },

  set(newValue) {
    props.selectedWidget.options = newValue
  }
})
</script>
<script lang="ts">
import PropertyEditors from './propertyEditor/index'
export default {
  components: {
    ...PropertyEditors
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.widget-panel-index {
  padding-right: 10px;
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
    .el-form{
      .el-form-item{
        margin-bottom: 10px;
      }
    }
  }
}
</style>