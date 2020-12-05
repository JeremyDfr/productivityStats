<template>
  <div class="range">
    <ion-label>{{ rangeTitle }}</ion-label>
    <ion-range ref="rangeDualKnobs" min="0" max="10" pin="true" value="5"
               v-model="state.input"></ion-range>
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
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const {state, getValue} = RangeInfos()

    return {
      state,
      getValue
    }
  }
};

function RangeInfos() {
  const state = reactive({
    input: 5
  })

  const getValue = () => {
    console.log(state.input)
  }

  return {state, getValue}
}
</script>

<style lang="scss">
.range {
  padding: 8px 8px;
  border-radius: 8px;

  ion-label {
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