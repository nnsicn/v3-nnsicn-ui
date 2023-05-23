import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/index.vue"

export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashBoard",
    meta: { title: "DashBoard", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "dashBoard",
        component: () => import("../views/dashBoard/index.vue"),
        meta: { title: "DashBoard", icon: "el-icon-platform-eleme" },
        hidden: false,
      },
    ],
  },
  {
    path: "/vForm",
    // component: Layout,
    meta: { title: "vForm", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "dashBoard",
        component: () => import("../views/vForm/index.vue"),
        meta: { title: "vForm", icon: "el-icon-platform-eleme" },
        hidden: false,
      },
    ],
  },
  {
    path: "/iconfont",
    component: Layout,
    meta: { title: "iconfont", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "index",
        component: () => import("../views/iconfont/index.vue"),
        meta: { title: "iconfont", icon: "el-icon-platform-eleme" },
        hidden: false,
      },
    ],
  },
  {
    path: "/personal",
    component: Layout,
    meta: { title: "personal", icon: "el-icon-platform-eleme" },
    children: [
      {
        path: "index",
        component: () => import("../views/personal/index.vue"),
        meta: { title: "personal", icon: "el-icon-platform-eleme" },
        hidden: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
