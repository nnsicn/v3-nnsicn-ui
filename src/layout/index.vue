<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <el-menu class="sidebar-menu" router>
            <sidebar
              v-for="route in routesMap"
              :key="route.path"
              :dealMenu="route"
            ></sidebar>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header>
            <nav-bar></nav-bar>
          </el-header>
          <el-main>
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from "vue";
  import sidebar from "./sidebar/sideBarItem.vue";
  import navBar from "./navBar/index.vue";
  import { routes } from "../router";
  components: {
    sidebar;
    navBar;
  }
  let routesMap = ref(routes);
  function dealMenu(children:any) {
    children.forEach((t:any) => {
      if (t.children && t.children.length > 0) {
        t.hidden = t.children.find((t:any) => !t.hidden) ? false : true;
        t.children = t.children.map((t1:any) => {
          return {
            ...t1,
            path:
              t.path === "/"
                ? `${t.path}${t1.path.split("/").pop()}`
                : `${t.path}/${t1.path.split("/").pop()}`,
          };
        });
        dealMenu(t.children);
      } else {
      }
    });
  }
  dealMenu(routesMap.value);
  </script>
  
  <style lang="scss">
  .common-layout {
    height: 100% !important;
    .el-header {
      padding: 0;
    }
    .el-container {
      height: 100% !important;
    }
    .el-main {
      height: calc(100% - 60px);
    }
  }
  </style>