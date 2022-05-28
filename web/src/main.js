import { createApp, h } from 'vue'
import App from './App.vue'
import { NConfigProvider, darkTheme } from 'naive-ui'
import './index.css'

const themeOverrides = {
  Message: {
    "colorError": "rgba(125, 76, 76, 1)",
    "colorSuccess": "rgba(84, 153, 105, 1)",
    "textColor": "rgba(255, 255, 255, 1)",
    "textColorInfo": "rgba(255, 255, 255, 1)",
    "textColorSuccess": "rgba(255, 255, 255, 1)",
    "textColorWarning": "rgba(255, 255, 255, 1)",
    "textColorLoading": "rgba(255, 255, 255, 1)",
    "textColorError": "rgba(255, 255, 255, 1)",
    "colorInfo": "rgba(60, 82, 112, 1)",
    "colorWarning": "rgba(156, 139, 71, 1)",
    "colorLoading": "rgba(123, 123, 123, 1)"
  },
  "Notification": {
    "color": "rgba(75, 85, 99, 1)"
  }
}

const app = createApp({
  render: () => h(NConfigProvider, {theme: darkTheme, themeOverrides: themeOverrides}, {
    default: () => h(App)
  })
})

app.mount('#app')