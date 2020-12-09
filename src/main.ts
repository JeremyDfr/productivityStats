import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import {IonicVue} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

const app = createApp(App)
    .use(IonicVue)
    .use(router);

const sqlite = SQLite.create({
    name: 'data.db',
    location: 'default'
})

app.config.globalProperties.$sqlite = sqlite

if (sqlite) {
  sqlite.then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS stats(energy INTEGER, concentration INTEGER, motivation INTEGER, date DATE)', [])
            .then(() => console.log('Executed OK'))
            .catch((e: any) => console.log(e))
    })
        .catch((e: any) => console.log(e))
}

router.isReady().then(() => {
    app.mount('#app');
});