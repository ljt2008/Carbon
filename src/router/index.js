import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "@/stores/userStore";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: 'topic/:id',
        component: () => import('@/views/Topic/index.vue')
      },
      {
        path: 'comic/:id',
        component: () => import('@/views/Comic/index.vue')
      },
      {
        path: 'recharge/:id',
        component: () => import('@/views/Recharge/index.vue')
      },
      {
        path: 'login',
        component: () => import('@/views/Login/index.vue')
      },
      {
        path: 'whiting',
        component: () => import('@/views/Whiting/index.vue'),
        meta: {
          permissions: ['commit', 'user'] // 需要 user commit 
        }
      },
      // 添加通配符路由规则
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound/index.vue'),
      }
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  // 获取用户权限信息，可以从用户对象、后端接口等获取
  const userPermissions = userStore.userInfo.permissions
  // 检查路由是否需要权限控制
  if (to.meta.permissions) {
    // 检查用户权限是否满足路由要求
    if (userPermissions) {
      if (to.meta.permissions.every(item => userPermissions.includes(item))) {
        next(); // 允许访问
      }
    } else {
      ElMessage({ message: "无权访问", type: "success" });
      next('/login'); // 重定向到登录页面或其他错误页面
    }
  } else {
    next(); // 不需要权限控制的路由，直接允许访问
  }
});
export default router
