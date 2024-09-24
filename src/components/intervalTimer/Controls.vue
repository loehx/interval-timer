<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, controller, theme } = useIntervalTimer();
</script>

<template>
  <div class="wrapper">
    <div class="button" @click="controller.togglePause()">
      {{ ctx.isPaused.value ? "RESUME" : "PAUSE" }}
    </div>
    <div class="button" @click="theme.toggleColor()">CHANGE<br />COLOR</div>
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
}

.button {
  padding: 20px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
