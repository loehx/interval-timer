<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <div
    class="background"
    :class="{
      'background--colorful': ctx.currentState.value === 'workout',
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

  &--colorful {
    background-color: #fff4b8;
    filter: hue-rotate(calc((1 - var(--workout-progress)) * 360deg));
  }
}
</style>
