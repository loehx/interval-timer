<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, controller } = useIntervalTimer();
</script>

<template>
  <div class="wrapper">
    <div class="button" @click.stop="controller.toggleMute()">
      {{ ctx.isMuted.value ? "UNMUTE" : "MUTE" }}
    </div>
    <div class="button" @click.stop="controller.skip()">SKIP</div>
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
  padding: 2vh 5vw;
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
