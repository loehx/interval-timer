<script setup lang="ts">
import useIntervalTimer from "./composables/useIntervalTimer";
import Progress from "./Progress.vue";
import Controls from "./Controls.vue";
import Background from "./Background.vue";
import Version from "./Version.vue";
import Counter from "./Counter.vue";
import PauseScreen from "./PauseScreen.vue";

const { ctx, controller, cssVars } = useIntervalTimer();
const isTouch = ctx.isTouch.value;
</script>

<template>
  <div
    class="container"
    :style="cssVars"
    @click.stop="!isTouch && controller.pause()"
    @touchstart.stop="isTouch && controller.pause()"
  >
    <Background />
    <Counter />
    <Version />
    <Progress v-if="ctx.currentState.value !== 'start'" />
    <Controls />
    <PauseScreen />
  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
}
</style>
