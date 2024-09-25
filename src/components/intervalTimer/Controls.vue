<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, controller, theme } = useIntervalTimer();
</script>

<template>
  <div class="wrapper">
    <div class="button" @click="controller.togglePause()">
      {{ ctx.isPaused.value ? "RESUME" : "PAUSE" }}
    </div>
    <div class="button" @click="controller.skip()">SKIP</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 20px;
}

.button {
  padding: 15px 20px;
  cursor: pointer;
  transition: all ease 0.2s;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.3;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
