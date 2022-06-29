import homePage from "./pages/app-home.cmp.js"
import aboutPage from "./pages/app-about.cmp.js"
import mailApp from "./apps/mail/mail-app.cmp.js"

const routes = [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/about',
      component: aboutPage
    },
    {
      path: '/mail',
      component: mailApp
    },
    // {
    //   path: '/keep',
    //   component: 
    // },
  ]
  
  export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
  })