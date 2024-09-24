import { watch } from "vue";
import type { TimerContext } from "./useContext";

export default function useColors(ctx: TimerContext) {
  if (ctx.queryParams.value.bg) {
    ctx.backgroundColor.value = ctx.queryParams.value.bg;
  } else {
    ctx.queryParams.value = {
      ...ctx.queryParams.value,
      bg: ctx.backgroundColor.value,
    };
  }

  watch(ctx.backgroundColor, (bg) => {
    if (ctx.queryParams.value.bg === bg) return;
    ctx.queryParams.value = {
      ...ctx.queryParams.value,
      bg,
    };
  });
}
