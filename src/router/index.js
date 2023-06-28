import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import ArticleDetailView from "../views/ArticleDetailView.vue";
import MainView from "../views/MainView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      name: "home",
      component: MainView,
      children: [
        {
          path: "",
          name: "home",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: HomeView,
        },
        {
          path: "about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/article/:articleId",
      name: "articleDetail",
      component: ArticleDetailView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("to", to);
  console.log("from", from);

  if () {
    // PINDAH KE HALAMAN LOGIN

  } else if () {
    // PINDAH KE HALAMAN HOME
  
  } else {
    next();
  }
});
export default router;
