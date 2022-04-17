import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

// 自定义样式
import './styles/index.scss'

createApp(App)
  .use(router)
  .mount('#app')
