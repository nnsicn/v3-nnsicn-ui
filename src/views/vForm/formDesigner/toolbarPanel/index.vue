<template>
  <el-header class="toolbar-panel">
    <el-button v-for="toolbar in toolbars" :key="toolbar.id" @click="handleClick(toolbar.id)">{{
      toolbar.id
    }}</el-button>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{designer:object}>()
const handleClick = (toolbar: string) => {
  switch (toolbar) {
    case 'back':
      break
    case 'deleteComponent':
        props.designer.deleteComponent()
        // deleteComponent()
      break
    case 'clearCanvas':
      break

    default:
      break
  }
}
function deleteComponent(){}
const toolbars = [
  {
    id: 'back'
  },
  {
    id: 'deleteComponent'
  },
  {
    id: 'clearCanvas'
  }
]
</script>

<style lang="scss" scoped>
.toolbar-panel {
  height: 40px;
  line-height: 40px;
}
</style>