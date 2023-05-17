<template>
  <div v-if="!menu.hidden">
    <template v-if="hasOneChildShow(menu) && !noChildrenShow(menu)">
      <router-link :to="onlyOneChild.path">
        <el-menu-item :key="onlyOneChild.path">
          {{ onlyOneChild.meta.title }}
        </el-menu-item>
      </router-link>
    </template>
    <template v-else-if="!hasOneChildShow(menu) && noChildrenShow(menu)">
      <router-link :to="noChildren.path">
        <el-menu-item :key="noChildren.path">
          {{ noChildren.meta.title }}
        </el-menu-item>
      </router-link>
    </template>
    <template v-else>
      <el-sub-menu :index="menu.path">
        <template #title>{{ menu.meta.title }}</template>
        <side-bar-item
          v-for="child in menu.children"
          :key="child.path"
          :dealMenu="child"
        ></side-bar-item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toRef, ref } from "vue";
// import { useRouter } from "@/store/app.js";
const props = defineProps(["dealMenu"]);
const menu = toRef(props, "dealMenu");
const onlyOneChild = ref({});
const noChildren = ref({});
// const routeStore = useRouter();
function noChildrenShow(menuItem:any) {
  if (!menuItem.children) {
    noChildren.value = menuItem;
    return true;
  }
  return false;
}
function hasOneChildShow(menuItem:any) {
  if (menuItem.children) {
    let filterChild = menuItem.children.filter((t:any) => !t.hidden);
    if (filterChild.length === 1) {
      filterChild[0].meta.name = filterChild[0].meta.title;
      onlyOneChild.value = filterChild[0];
      // routeStore.currentRouter = onlyOneChild.value.meta.name;
      return true;
    }
    return false;
  }
  return false;
}
</script>

<style>
</style>