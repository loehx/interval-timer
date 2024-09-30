import type { TimerContext } from "./useContext";

export default function usePreventBrowserCache(ctx: TimerContext) {
  const random = Math.round(Math.random() * 1000);
  ctx.queryParams.value = { ...ctx.queryParams.value, r: String(random) };
}
