import { watch } from "vue";
import type { TimerContext } from "./useContext";

export default function useStringifier(ctx: TimerContext) {
  watch(ctx.counter, () => {
    ctx.stringified.value = JSON.stringify(
      {
        counter: ctx.counter.value,
        initialCounter: ctx.initialCounter.value,
        progress: ctx.progress.value,
        state: ctx.currentState.value,
        isRunning: ctx.isRunning.value,
        isPaused: ctx.isPaused.value,
        backgroundColor: ctx.backgroundColor.value,
      },
      null,
      2
    );
  });
}
