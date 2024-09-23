<script setup lang="ts">
import { onMounted } from "vue";
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, start } = useIntervalTimer();

onMounted(() => {
  start();
});
</script>

<template>
  <div class="container">
    <div class="counter">{{ ctx.formattedCounter }}</div>
    <pre class="stringified">{{ ctx.stringified }}</pre>
  </div>
</template>

<style scoped lang="scss">
.counter {
  font-weight: 500;
  font-size: 2.6rem;
}

.stringified {
  font-size: 1rem;
  margin: 0;
  opacity: 0.3;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  padding: 10px;
}
</style>
