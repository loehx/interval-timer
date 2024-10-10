<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
const { ctx, controller, noSleep, sound } = useIntervalTimer();
const isTouch = ctx.isTouch.value;
const onClick = async () => {
  await noSleep.activate();
  controller.resume();
};
</script>

<template>
  <div
    class="pause-screen"
    @click.stop="onClick()"
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
  background: linear-gradient(rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.4));
  mix-blend-mode: multiply;
  cursor: pointer;
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    /* chrome only */
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }

  &--visible {
    opacity: 1;
    pointer-events: auto;
  }

  &__label {
    font-size: 1.5rem;
    transition: all 0.3s ease;
    user-select: none;
  }

  &:active {
    .pause-screen__label {
      transform: scale(0.9);
    }
  }
}
</style>
