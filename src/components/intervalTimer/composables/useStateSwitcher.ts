import type { TimerContext, TimerState } from "./useContext";
import { onMounted, watch } from "vue";

const STATE_FLOW = {
  start: "workout",
  workout: "pause",
  pause: "workout",
} as Record<TimerState, TimerState>;

export default function useStateSwitcher(ctx: TimerContext) {
  const setState = (state: TimerState) => {
    ctx.currentState.value = state;
    ctx.counter.value = ctx.times[state];
    ctx.initialCounter.value = ctx.counter.value;
  };

  watch(ctx.counter, () => {
    if (ctx.counter.value <= 0) {
      const newState = STATE_FLOW[ctx.currentState.value];
      setState(newState);
    }
  });

  setState("start");
}
