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
import useSound from "./useSound";
import useNoSleep from "./useNoSleep";
import useColor from "./useColor";
import useDeviceDetection from "./useDeviceDetection";

let ctx = null as null | TimerContext;

export default function useIntervalTimer() {
  if (!ctx) {
    ctx = useContext();
    useDeviceDetection(ctx);
    useQueryParams(ctx);
    useTimeSettings(ctx);
    useStateSwitcher(ctx);
    useCounter(ctx);
    useCounterFormatter(ctx);
    useStringifier(ctx);
    useSnapshots(ctx);
    useSound(ctx, true);
    useColor(ctx, true);
  }

  return {
    ctx,
    cssVars: useCssVars(ctx),
    controller: useController(ctx),
    noSleep: useNoSleep(ctx),
    color: useColor(ctx, false),
    sound: useSound(ctx, false),
  };
}
