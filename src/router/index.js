import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(), // history 模式
  routes: [
    {
      path: "/",
      name: "home",
      component: defineAsyncComponent(() => import(`../views/table.vue`)),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/list",
      name: "list",
      component: defineAsyncComponent(() => import(`../views/list.vue`)),
      meta: {
        title: "列表",
      },
    },
    {
      path: "/seach",
      name: "seach",
      component: defineAsyncComponent(() => import(`../views/seach.vue`)),
      meta: {
        title: "查询",
      },
    },

    {
      path: "/*",
      redirect: "/",
    },
  ],
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next();
});

router.afterEach((to, from) => {
  // console.log(to, from)
  // console.log("afterEach");
});

export default router;
