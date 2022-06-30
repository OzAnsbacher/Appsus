import homePage from "./pages/app-home.cmp.js"
import aboutPage from "./pages/app-about.cmp.js"
import mailApp from "./apps/mail/pages/mail-app.cmp.js"
import noteApp from "./apps/keep/pages/note-app.js"
import mailCompose from "./apps/mail/cmps/mail-compose.cmp.js"
import mailSend from "./apps/mail/cmps/mail-send.cmp.js"

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
      path: '/mail/compose',
      component: mailCompose
    },
    {
      path: '/mail/send',
      component: mailSend
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