import type { TimerContext, TimerState } from "./useContext";
import { watch } from "vue";

const STATE_FLOW = {
  start: "workout",
  workout: "pause",
  pause: "workout",
} as Record<TimerState, TimerState>;

export default function useTimeSettings(ctx: TimerContext) {
  const queryParams = { ...ctx.queryParams.value };

  // Set initial values from query params
  ctx.states.forEach((state) => {
    if (state in queryParams) {
      const value = queryParams[state];
      const numberValue = Number(value);
      if (!isNaN(numberValue)) {
        ctx.times[state] = numberValue;
      }
    } else {
      queryParams[state] = String(ctx.times[state]);
    }
  });

  ctx.queryParams.value = queryParams;
}
