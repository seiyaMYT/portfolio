import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";
import Home from "../components/pages/Home.vue"; // 追加
import article from "../components/pages/article.vue"; // 追加
import Account from "../components/pages/account.vue"; // 追加

const routes = [
  {
    path: "/",
    component: Home, // LoginからChatに変更
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login", // 追加
    component: Login, // 追加
  },

  {
    path: "/article", // 追加
    component: article, // 追加
  },

  {
    path: "/account", // 追加
    component: Account, // 追加
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;