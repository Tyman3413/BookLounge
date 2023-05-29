import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import Main from "./components/Main.vue"
import Favorite from "./components/Favorite.vue"
import Stocks from "./components/Stocks.vue"
import router from "./router.js"
import { register} from 'swiper/element/bundle'

register();
const app = createApp(App)
app.use(router)
app.component("Main", Main)
app.component("Favorite", Favorite)
app.component("Stocks", Stocks)
app.mount('#app')

