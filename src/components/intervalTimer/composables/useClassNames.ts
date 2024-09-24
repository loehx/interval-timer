import { useRoute } from "vue-router";
import type { TimerContext } from "./useContext";
import { computed, watch } from "vue";

export default function useCssVars(ctx: TimerContext) {
  return computed(() => {
    const progress =
      Math.round((ctx.counter.value / ctx.initialCounter.value) * 100) / 100;

    return {
      "--progress-down": progress,
      "--progress-up": Math.round((1 - progress) * 100) / 100,
    };
  });
}
