<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx } = useIntervalTimer();
</script>

<template>
  <div class="wrapper">
    <div
      class="counter"
      :class="{
        'counter--big': ctx.currentState.value === 'workout',
      }"
    >
      {{ ctx.formattedCounter }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.counter {
  font-weight: 500;
  font-size: 2.6rem;
  cursor: default;

  &--big {
    font-size: 5rem;
  }
}
</style>
