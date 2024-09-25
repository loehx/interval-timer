import { type TimerContext } from "./useContext";

export default function useController(ctx: TimerContext) {
  return {
    togglePause: () => {
      ctx.isPaused.value = !ctx.isPaused.value;
    },
    pause: () => {
      ctx.isPaused.value = true;
    },
    resume: () => {
      ctx.isPaused.value = false;
    },
    skip: () => {
      ctx.counter.value = 0;
    },
    toggleMute: () => {
      ctx.isMuted.value = !ctx.isMuted.value;
    },
  };
}
