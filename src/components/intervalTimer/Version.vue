<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <pre class="version">{{ ctx.version }}</pre>
</template>

<style scoped lang="scss">
.version {
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  mix-blend-mode: difference;
}
</style>
