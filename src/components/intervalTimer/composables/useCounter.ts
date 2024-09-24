import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  let timer = null as null | number;
  let init = true;

  const tick = () => {
    const counter = Math.max(ctx.counter.value - 1, 0);
    ctx.counter.value = counter;
  };

  const resume = () => {
    timer = setInterval(tick, 1000);
    tick();
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
