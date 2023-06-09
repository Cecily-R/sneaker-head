import { createApp } from 'vue'
import App from './App.vue'
import ProductCard from '@/components/ProductCard.vue';

const app = createApp(App)
app.component('ProductCard', ProductCard);

app.mount('#app')
