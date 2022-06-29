import homePage from "./pages/app-home.cmp.js"
import aboutPage from "./pages/app-about.cmp.js"
import mailApp from "./apps/mail/pages/mail-app.cmp.js"
import noteApp from "./apps/keep/pages/note-app.js"

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
    {
      path: '/keep',
      component: noteApp
    },
  ]
  
  export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
  })