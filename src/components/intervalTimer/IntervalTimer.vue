<script setup lang="ts">
import { onMounted, computed } from "vue";
import useIntervalTimer from "./composables/useIntervalTimer";
import Progress from "./Progress.vue";
import Controls from "./Controls.vue";

const { ctx, controller, cssVars } = useIntervalTimer();

onMounted(() => {
  controller.start();
});

const bgColor = computed(() => ctx.backgroundColor.value);
</script>

<template>
  <div class="container" :style="cssVars">
    <div class="counter">{{ ctx.formattedCounter }}</div>
    <pre class="stringified">{{ ctx.stringified }}</pre>
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

.counter {
  font-weight: 500;
  font-size: 2.6rem;
}

.stringified {
  font-size: 1rem;
  margin: 0;
  opacity: 0.3;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  padding: 10px;
}
</style>
