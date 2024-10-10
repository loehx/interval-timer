import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useMetaTitle(ctx: TimerContext) {
  watch(
    () => ctx.times,
    (times) => {
      const { workout, pause } = times || {};
      if (!workout || !pause) return;
      document.title = `${workout}/${pause} timer`;
    },
    { immediate: true }
  );
}
