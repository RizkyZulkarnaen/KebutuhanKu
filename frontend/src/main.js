import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(router);
app.use(PrimeVue,{
    theme: {
        preset: Material,
        options: {
            darkModelSelector: 'sytem',
        }
    }
});
app.mount('#app');