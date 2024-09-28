<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";

const { ctx, controller, color, sound } = useIntervalTimer();

const isTouch = ctx.isTouch.value;
</script>

<template>
  <div class="wrapper" :class="{ 'wrapper--desktop': !isTouch }">
    <div
      class="button"
      @touchstart.stop="isTouch && color.toggleColor()"
      @click.stop="!isTouch && color.toggleColor()"
    >
      COLOR
    </div>
    <div
      class="button"
      @touchstart.stop="isTouch && sound.toggleMute()"
      @click.stop="!isTouch && sound.toggleMute()"
    >
      {{ ctx.isMuted.value ? "UNMUTE" : "MUTE" }}
    </div>
    <div
      class="button"
      @touchstart.stop="isTouch && controller.skip()"
      @click.stop="!isTouch && controller.skip()"
    >
      SKIP
    </div>
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

  .wrapper--desktop &:hover {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
