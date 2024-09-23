import useContext from "./useContext";
import useCounter from "./useCounter";
import useCounterFormatter from "./useCounterFormatter";
import useSettings from "./useSettings";
import useStateSwitcher from "./useStateSwitcher";
import useStringifier from "./useStringifier";
import useSnapshots from "./useSnapshots";
import useController from "./useController";

export default function useIntervalTimer() {
  const ctx = useContext();
  const controller = useController(ctx);

  useSettings(ctx);
  useCounter(ctx);
  useStateSwitcher(ctx);
  useCounterFormatter(ctx);
  useStringifier(ctx);
  useSnapshots(ctx);

  return {
    ctx,
    ...controller,
  };
}
