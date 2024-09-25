<script setup lang="ts">
import { onMounted, computed } from "vue";
import useIntervalTimer from "./composables/useIntervalTimer";
import Progress from "./Progress.vue";
import Controls from "./Controls.vue";
import Background from "./Background.vue";
import Stringified from "./Stringified.vue";
import Counter from "./Counter.vue";

const { ctx, controller, cssVars } = useIntervalTimer();

const bgColor = computed(() => ctx.backgroundColor.value);
</script>

<template>
  <div class="container" :style="cssVars">
    <Background />
    <Counter />
    <!-- <Stringified /> -->
    <Progress v-if="ctx.currentState.value !== 'start'" />
    <Controls />
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
  align-items: center;
  justify-content: center;
  background-color: v-bind(bgColor);
}
</style>
