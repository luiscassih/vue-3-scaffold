<template>
  Plain Text
  <div class="asd">Text with scoped scss</div>
  <img src="assets/logo.png" height="200" />
  <Counter />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Counter from './Components/Counter.vue';

export default defineComponent({
  setup() {
  },
  components: {
    Counter
  }
})
</script>
<style lang="scss" scoped>
.asd {
  color: red;
}
</style>