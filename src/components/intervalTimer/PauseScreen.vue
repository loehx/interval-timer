<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx, controller, noSleep } = useIntervalTimer();

const onClick = () => {
  noSleep.activate();
  controller.resume();
};
</script>

<template>
  <div
    class="pause-screen"
    @click.stop="!ctx.isTouch && onClick()"
    @touchstart.stop="ctx.isTouch && onClick()"
    :class="{
      'pause-screen--visible': ctx.isPaused.value,
    }"
  >
    <span class="pause-screen__label">CLICK TO START</span>
  </div>
</template>

<style scoped lang="scss">
.pause-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  opacity: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.2);
  mix-blend-mode: multiply;
  backdrop-filter: blur(5px);
  cursor: pointer;

  &--visible {
    opacity: 1;
    pointer-events: auto;
  }

  &__label {
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  &:active {
    .pause-screen__label {
      transform: scale(0.9);
    }
  }
}
</style>
