import type { TimerContext } from "./useContext";

export default function useDeviceDetection(ctx: TimerContext) {
  ctx.isTouch.value = isTouchDevice();
}

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
}
