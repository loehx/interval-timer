<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, controller, theme } = useIntervalTimer();
</script>

<template>
  <div class="wrapper wrapper--top">
    <div class="button" @click="controller.togglePause()">
      {{ ctx.isPaused.value ? "RESUME" : "PAUSE" }}
    </div>
  </div>

  <div class="wrapper wrapper--bottom">
    <div class="button" @click="controller.togglePause()">
      {{ ctx.isPaused.value ? "RESUME" : "PAUSE" }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  text-align: center;

  &--top {
    top: 0;
    bottom: auto;
  }
}

.button {
  padding: 20px 30px;
  cursor: pointer;
  transition: all ease 0.3s;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.3;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
