<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <pre class="version">v{{ ctx.version }}</pre>
</template>

<style scoped lang="scss">
.version {
  font-size: 0.8rem;
  margin: 0;
  opacity: 0.8;
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "courier new";

  &:hover {
    opacity: 1;
  }
}
</style>
