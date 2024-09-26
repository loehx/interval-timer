import type { TimerContext } from "./useContext";
import { onMounted, watch } from "vue";

let interval = null as any;

export default function useTimer(ctx: TimerContext) {
  const tick = () => {
    if (ctx.isPaused.value) return;
    const counter = Math.max(ctx.counter.value - 1, 0);
    ctx.counter.value = counter;
  };

  const start = () => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(tick, 1000);
  };

  onMounted(() => start());
}
