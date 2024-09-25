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
    <div class="state">{{ ctx.currentState.value }}</div>
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

.state {
  text-transform: uppercase;
  font-weight: 900;
  opacity: 0.2;
  cursor: default;
}
</style>
