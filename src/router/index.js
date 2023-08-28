import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppMain from "@/layout/AppMain.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/api",
      name: "api",
      component: AppMain,
      children: [
        /******************************* Group_01 Start *******************************/
        {
          path: "group_01/demo_01",
          name: "group_01/demo_01",
          component: () => import("../views/api/group_01/demo_01/index.vue"),
        },
        {
          path: "group_01/demo_02",
          name: "group_01/demo_02",
          component: () => import("../views/api/group_01/demo_02/index.vue"),
        },
        {
          path: "group_01/demo_03",
          name: "group_01/demo_03",
          component: () => import("../views/api/group_01/demo_03/index.vue"),
        },
        {
          path: "group_01/demo_04",
          name: "group_01/demo_04",
          component: () => import("../views/api/group_01/demo_04/index.vue"),
        },
        /******************************* Group_01 End *********************************/
        
        /******************************* Group_02 Start *******************************/
        {
          path: "group_02/demo_01",
          name: "group_02/demo_01",
          component: () => import("../views/api/group_02/demo_01/index.vue"),
        },
        /******************************* Group_02 End *********************************/
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
