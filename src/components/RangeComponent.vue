<template>
  <div class="range">
    <ion-label>{{ rangeTitle }}</ion-label>
    <ion-range min="0" max="10" pin="true" value="5" v-model="state.input" @ionBlur="$emit('range-value', state.input)"></ion-range>
  </div>
</template>

<script lang="ts">
import {IonRange, IonLabel} from '@ionic/vue';
import {reactive} from 'vue'

export default {
  components: {IonRange, IonLabel},
  props: {
    rangeTitle: null
  },
  setup() {
    const state = reactive({
      input: 5
    })

    return {
      state
    }
  }
};
</script>

<style lang="scss">
.range {
  padding: 8px 8px;
  border-radius: 8px;

  ion-label {
    color: #ffffff;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
  }

  ion-range {
    --bar-background-active: #ffffff;
    --bar-background: #ffffff;
    --pin-background: #ffffff;
    --knob-background: #ffffff;
    --bar-height: 4px;
    --knob-size: 20px;
  }

  &.motivation-style {
    background: #EE5F5F;

    ion-range {
      --pin-color: #EE5F5F;
    }
  }

  &.concentration-style {
    background: #5FC3EE;

    ion-range {
      --pin-color: #5FC3EE;
    }
  }

  &.energy-style {
    background: #FFED4E;

    ion-range {
      --pin-color: #FFED4E;
    }
  }
}
</style>