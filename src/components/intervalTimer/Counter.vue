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
    <span class="counter__state">
      {{ ctx.currentState.value }}
    </span>
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
  padding: 0 20px;
  font-weight: 500;
  font-size: 2.6rem;
  cursor: default;
  transition: all 0.3s ease;
  will-change: filter, font-size;
  filter: drop-shadow(15px 15px 2px rgba(0, 0, 0, 0.1));

  &--big {
    font-size: 5rem;
  }

  &__state {
    text-transform: uppercase;
    font-size: 0.8rem;
    position: relative;
    font-weight: 600;
    padding: 10px;
    display: block;
    letter-spacing: 1px;
    opacity: 0.2;
    margin-top: 15px;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 1px;
      width: 50px;
      background-color: var(--font-color);
      top: 50%;
      transform: translateY(-50%);
    }

    &:after {
      left: 100%;
    }

    &:before {
      right: 100%;
    }
  }
}
</style>
