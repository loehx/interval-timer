import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  let timer = null as null | number;

  const resume = () => {
    timer = setInterval(() => {
      ctx.counter.value++;
    }, 1000);
  };

  const pause = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  watch([ctx.isRunning, ctx.isPaused], ([isRunning, isPaused]) => {
    const shallRun = ctx.isRunning.value && !ctx.isPaused.value;
    if (shallRun) resume();
    else pause();
  });
}
