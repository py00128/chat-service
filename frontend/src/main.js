import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'

// set up global styles
import './assets/main.css'
// ICONS
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* IMPORT SPECIFIC ICONS HERE*/
import { faInbox, faHeart, faShoppingBag, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

/* Adding to library so we can use throughout project*/
library.add(faInbox, faHeart, faShoppingBag, faPaperPlane)

createApp(App)
  .component('font-awesome-icon',FontAwesomeIcon)
  .mount('#app')
