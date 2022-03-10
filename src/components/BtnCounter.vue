<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'BtnCounter',
  setup ()  {
    const counter = ref(0)

    const $q = useQuasar()

    const version = computed(() => $q.version)

    const plus = () => {
      counter.value++
    }

    const minus = () => {
      counter.value--
    }

    return {
      counter,
      version,
      plus,
      minus
    }
  }
})
</script>

<template>
  <q-page padding>
    <div class="text-h4">
      {{ version }}
      <q-badge align="top">
        {{ counter }}
      </q-badge>
    </div>

    <q-separator />
    <q-btn-group push>
      <q-btn @click="minus">-</q-btn>
      <q-btn @click="plus">+</q-btn>
    </q-btn-group>
  </q-page>
</template>