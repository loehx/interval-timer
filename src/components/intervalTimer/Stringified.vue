<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <pre class="stringified">{{ ctx.stringified }}</pre>
</template>

<style scoped lang="scss">
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
