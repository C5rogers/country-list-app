import './style.css'

import apploClient from './AppoloClient'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'


const app = createApp(App)

app.provide(DefaultApolloClient, apploClient)

app.use(router)

app.mount('#app')