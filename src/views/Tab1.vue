<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col>
            <range-component :range-title="energy.title" :class="energy.style"
                             @range-value="energy.value = $event"></range-component>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <range-component :range-title="concentration.title" :class="concentration.style"
                             @range-value="concentration.value = $event"></range-component>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <range-component :range-title="motivation.title" :class="motivation.style"
                             @range-value="motivation.value = $event"></range-component>
          </ion-col>
        </ion-row>
        <ion-row>
          <save-component @click="insert"></save-component>
        </ion-row>
      </ion-grid>
      <ul>
        <li v-for="result in results" :key="result">
          <p>Energy: {{ result.energy }}</p>
          <p>Concentration: {{ result.concentration }}</p>
          <p>Motivation: {{ result.motivation }}</p>
          <p>Date: {{ result.date }}</p>
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, reactive, getCurrentInstance} from 'vue'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol} from '@ionic/vue';
import RangeComponent from '@/components/RangeComponent.vue';
import SaveComponent from "@/components/SaveComponent.vue";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

export default defineComponent({
  name: 'Tab1',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    RangeComponent,
    SaveComponent
  },
  setup() {
    const energy = reactive({
      title: 'Energy',
      style: 'energy-style',
      value: 5
    })
    const concentration = reactive({
      title: 'Concentration',
      style: 'concentration-style',
      value: 5
    })
    const motivation = reactive({
      title: 'Motivation',
      style: 'motivation-style',
      value: 5
    })

    const results = reactive<any>([])

    const instance = getCurrentInstance()
    const sqlite = instance?.appContext.config.globalProperties.$sqlite

    const select = () => {
      if (sqlite) {
        sqlite.then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM stats', [])
              .then((data) => {
                for (let i = 0; i < data.rows.length; i++) {
                  results.push({
                    id: data.rows.item(i).id,
                    energy: data.rows.item(i).energy,
                    concentration: data.rows.item(i).concentration,
                    motivation: data.rows.item(i).motivation,
                    date: data.rows.item(i).date
                  })
                }
              })
              .catch((e: any) => console.log(e))
        })
            .then(() => {
              results.splice(0, results.length)
            })
            .catch((e: any) => console.log(e))
      }
    }

    function insert() {
      if (sqlite) {
        sqlite.then((db: SQLiteObject) => {
          db.executeSql('INSERT INTO stats (energy, concentration, motivation, date) VALUES (:energy, :concentration, :motivation, :date)',
              [energy.value, concentration.value, motivation.value, new Date()])
              .then(() => {
                console.log('OK')
                select()
              })
              .catch((e: any) => console.log(e))
        })
      }
    }

    select()

    return {
      energy, concentration, motivation, insert, results
    }
  }
})

interface Row {
  id: number;
  energy: number;
  concentration: number;
  motivation: number;
  date: string;
}
</script>