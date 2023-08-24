import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Results",
    path: "/results",
    component: () => import("../views/Results.vue"),
    props: (route) => ({ query: route.query.search }),
  },
  {
    name: "Recipe",
    path: "/recipe/:id",
    component: () => import("../views/Recipe.vue"),
    props: (route) => ({ id: route.params.id }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
