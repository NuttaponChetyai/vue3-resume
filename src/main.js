import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import { createPinia } from "pinia";
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import iconSet from 'quasar/icon-set/fontawesome-v5';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import { router } from './routers';
// Import Quasar css
import 'quasar/src/css/index.sass';
const app = createApp(App);

app.use(Quasar, {
	iconSet: iconSet
});
app.use(createPinia());
app.use(router);
app.mount('#app');


