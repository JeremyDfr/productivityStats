<template>
  <ion-app>
    <ion-router-outlet/>
  </ion-app>
</template>

<script lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {defineComponent} from 'vue';

import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup() {
    const connection = SQLite.create({
      name: 'data.db',
      location: 'default'
    })

    if (connection) {
      connection.then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS stats(energy INTEGER, concentration INTEGER, motivation INTEGER, date DATE)', [])
            .then(() => console.log('Executed SQL'))
            .catch((e: any) => console.log(e))
      })
          .catch((e: any) => console.log(e))
    }
  }
});
</script>