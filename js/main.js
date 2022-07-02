const { createApp } = Vue

import { router } from "./router.js"

const options = {
    template: `
       <header class="header-conteiner">
        <h2>Mor&Oz</h2>
         <nav class="nav-bar">
           <router-link to="/"><img class="btn-nav" src="./icons/home.png" alt=""></router-link>
           <router-link to="/keep"><img class="btn-nav" src="./icons/note.png" alt=""></router-link>
           <!-- <router-link to="/about"><img class="btn-nav" src="./icons/about.png" alt=""></router-link> -->
           <router-link to="/mail"><img class="btn-nav" src="./icons/mail.png" alt=""></router-link>
          </nav>
        </header>
          <router-view/>
      `,
    components: {

    }
  
  }


  const app = createApp(options)
app.use(router)
app.mount('#app')


