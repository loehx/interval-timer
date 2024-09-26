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
  background: linear-gradient(var(--background-color), var(--background-color));

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }

  &:before {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
    opacity: 1;
  }

  &--workout {
    &:before {
      opacity: 0;
    }
  }
}
</style>
