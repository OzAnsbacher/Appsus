const { createApp } = Vue

import { router } from "./router.js"

const options = {
    template: `
          <nav class="nav-bar">
            <router-link class="btn-nav" to="/">Home</router-link>
            <router-link class="btn-nav" to="/keep">Keep</router-link>
            <router-link class="btn-nav" to="/about">About</router-link>
            <router-link class="btn-nav" to="/mail">Mail</router-link>
        </nav>
     <router-view/>
      `,
    components: {

    }
  
  }


  const app = createApp(options)
app.use(router)
app.mount('#app')


