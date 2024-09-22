import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  watch(ctx.counter, () => {
    if (
      ctx.state.value === "workout" &&
      ctx.counter.value >= ctx.workoutTime.value
    ) {
      ctx.state.value = "pause";
      ctx.counter.value = 0;
    } else if (
      ctx.state.value === "pause" &&
      ctx.counter.value >= ctx.pauseTime.value
    ) {
      ctx.state.value = "workout";
      ctx.counter.value = 0;
    }
  });
}
