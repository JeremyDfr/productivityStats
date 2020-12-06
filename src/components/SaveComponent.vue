<template>
  <div class="save">
    <ion-button expand="full">Full Button</ion-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonButton} from '@ionic/vue';

export default defineComponent({
  components: {IonButton},
  props: {
    allData: null
  },
  setup(props) {
    console.log(props.allData)
  }
});
</script>