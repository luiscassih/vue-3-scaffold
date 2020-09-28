<template>

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
<style lang="scss" scoped>

</style>