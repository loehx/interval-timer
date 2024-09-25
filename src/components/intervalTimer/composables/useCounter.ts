import type { TimerContext } from "./useContext";
import { onMounted, watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  const tick = () => {
    if (ctx.isPaused.value) return;
    const counter = Math.max(ctx.counter.value - 1, 0);
    ctx.counter.value = counter;
  };

  const start = () => {
    setInterval(tick, 1000);
  };

  onMounted(() => start());
}
