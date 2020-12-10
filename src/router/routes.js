
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/moncv', component: () => import('pages/monCv.vue') },
      { path: '/myskill', component: () => import('pages/mySkill.vue') },
      { path: '/myproject', component: () => import('pages/myproject.vue') }
    ]
  },
  // {
  //   path: '/moncv',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/monCv.vue') }
  //   ]
  // },
  // {
  //   path: '/myskill',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/mySkill.vue') }
  //   ]
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
