import useContext, { type TimerContext } from "./useContext";
import useCounter from "./useCounter";
import useCounterFormatter from "./useCounterFormatter";
import useQueryParams from "./useQueryParams";
import useStateSwitcher from "./useStateSwitcher";
import useStringifier from "./useStringifier";
import useSnapshots from "./useSnapshots";
import useController from "./useController";
import useCssVars from "./useCssVars";
import useTimeSettings from "./useTimeSettings";
import useColorSettings from "./useColorSettings";
import useThemeController from "./useThemeController";

let ctx = null as null | TimerContext;

export default function useIntervalTimer() {
  if (!ctx) {
    ctx = useContext();
    useQueryParams(ctx);
    useCounter(ctx);
    useStateSwitcher(ctx);
    useCounterFormatter(ctx);
    useStringifier(ctx);
    useSnapshots(ctx);
    useTimeSettings(ctx);
    useColorSettings(ctx);
  }

  return {
    ctx,
    cssVars: useCssVars(ctx),
    controller: useController(ctx),
    theme: useThemeController(ctx),
  };
}
