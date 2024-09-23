import { type TimerContext } from "./useContext";

export default function useController(ctx: TimerContext) {
  return {
    start: () => {
      ctx.isRunning.value = true;
    },
    pause: () => {
      ctx.isPaused.value = true;
    },
    resume: () => {
      ctx.isPaused.value = false;
    },
    stop: () => {
      ctx.isRunning.value = false;
      ctx.isPaused.value = false;
    },
  };
}
