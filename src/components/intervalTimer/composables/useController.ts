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
  };
}
