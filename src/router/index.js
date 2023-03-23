import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/views/SignUp-SignIn/selectLanguage.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUp-SignIn/SignUp.vue')
  },
  {
    path: '/setperson',
    component: () => import('@/views/SignUp-SignIn/SetPersonality.vue')
  },
  {
    path: '/choosefood',
    component: () => import('@/views/SignUp-SignIn/ChooseFood.vue')
  },
  {
    path: '/uploadphoto',
    component: () => import('@/views/SignUp-SignIn/UploadPhoto.vue')
  },
  {
    path: '/theApp',
    component: () => import('@/views/TheApp.vue'),

    children: [
      { path: 'vokrug', component: () => import('@/views/TheVokrug.vue')},
      { path: 'igra', component: () => import('@/views/TheGame.vue')},
      { path: 'dialog', component: () => import('@/views/TheDialogs.vue')},
      { path: 'chat', component: () => import('@/views/TheChat.vue')},
      { path: 'history', component: () => import('@/views/TheHistory.vue')},
      { path: 'settings', component: () => import('@/views/TheSettings.vue'),},
      { path: 'useInfo', component: () => import('@/views/Profile/TheUseInfo.vue') },
      { path: 'support', component: () => import('@/views/Profile/TheSupport.vue') },
      { path: 'otherUser', component: () => import('@/views/Others/TheOtherUserProfile.vue') },
      { path: 'win', component: () => import('@/views/Others/TheWin.vue') },
      { path: 'lose', component: () => import('@/views/Others/TheLose.vue') },
      { path: 'selectImg', component: () => import('@/views/Profile/TheSelectImg.vue') },
      { path: 'share', component: () => import('@/views/Others/TheShareWithFriends.vue') },
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
