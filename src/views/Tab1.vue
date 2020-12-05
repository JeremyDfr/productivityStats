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
            <range-component :range-title="energy.title" :class="energy.style"></range-component>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <range-component :range-title="concentration.title" :class="concentration.style"></range-component>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <range-component :range-title="motivation.title" :class="motivation.style"></range-component>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol} from '@ionic/vue';
import RangeComponent from '@/components/RangeComponent.vue';

export default {
  name: 'Tab1',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol, RangeComponent},
  data: () => ({
    energy: {
      title: 'Energy',
      style: 'energy-style'
    },
    concentration: {
      title: 'Concentration',
      style: 'concentration-style'
    },
    motivation: {
      title: 'Motivation',
      style: 'motivation-style'
    },
  })
}
</script>