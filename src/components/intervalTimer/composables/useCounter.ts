import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  let timer = null as null | number;

  const tick = () => {
    ctx.counter.value--;
    const progress = ctx.counter.value / ctx.initialCounter.value;
    ctx.progress.value = Math.round(progress * 100) / 100;
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
