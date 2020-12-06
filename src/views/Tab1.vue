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
          <save-component
              :all-data="{energy: energy.value, concentration: concentration.value, motivation: motivation.value}"></save-component>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol} from '@ionic/vue';
import RangeComponent from '@/components/RangeComponent.vue';
import SaveComponent from "@/components/SaveComponent.vue";

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
  data: () => ({
    energy: {
      title: 'Energy',
      style: 'energy-style',
      value: null
    },
    concentration: {
      title: 'Concentration',
      style: 'concentration-style',
      value: null
    },
    motivation: {
      title: 'Motivation',
      style: 'motivation-style',
      value: null
    },
  })
})
</script>