import useContext from "./useContext";
import useCounter from "./useCounter";
import useSettings from "./useSettings";
import useStateSwitcher from "./useStateSwitcher";

export default function useController() {
  const ctx = useContext();

  useSettings(ctx);
  useCounter(ctx);
  useStateSwitcher(ctx);

  return {
    ctx,
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
      ctx.counter.value = 0;
    },
  };
}
