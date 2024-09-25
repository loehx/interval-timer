import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useTimer(ctx: TimerContext) {
  watch(
    ctx.counter,
    (counter) => {
      ctx.formattedCounter.value = formatCounter(counter);
    },
    { immediate: true }
  );
}
function formatCounter(counter: number): string {
  if (counter < 60) return String(counter);
  const minutes = String(Math.floor(counter / 60)).padStart(2, "0");
  const seconds = String(counter % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}
