<template>
  <button @click="store.commit('incrementCounter')">Clicked: {{ store.state.counter }}</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    return { store };
  }
});
</script>