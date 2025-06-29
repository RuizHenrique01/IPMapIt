
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }
 }).mount('#app');