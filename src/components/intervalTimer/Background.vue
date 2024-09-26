<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <div
    class="background"
    :class="{
      'background--workout': ctx.currentState.value === 'workout',
    }"
  ></div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  background-color: var(--background-color);
  filter: saturate(0.5);

  &--workout {
    filter: saturate(1);
  }
}
</style>
