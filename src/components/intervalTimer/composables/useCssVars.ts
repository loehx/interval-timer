import { useRoute } from "vue-router";
import type { TimerContext } from "./useContext";
import { computed, watch } from "vue";

export default function useCssVars(ctx: TimerContext) {
  return computed(() => {
    const progressDown =
      Math.round((ctx.counter.value / ctx.initialCounter.value) * 100) / 100;
    const progressUp = Math.round((1 - progressDown) * 100) / 100;

    return {
      "--workout-progress":
        ctx.currentState.value === "workout" ? progressDown : progressUp,
      "--progress-down": progressDown,
      "--progress-up": progressUp,
      "--background-color": ctx.backgroundColor.value,
      "--font-color": ctx.fontColor.value,
    };
  });
}
