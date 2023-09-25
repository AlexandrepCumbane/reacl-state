import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/tailwind.css'
import Chakra from '@chakra-ui/vue'

const app = createApp(App)

app.use(router)
app.use(Chakra) // Use o Chakra UI aqui

app.mount('#app')
