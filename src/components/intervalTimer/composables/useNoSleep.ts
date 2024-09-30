import type { TimerContext } from "./useContext";
import NoSleep from "./nosleep";

let nosleep = null as any;

export default function useNoSleep(ctx: TimerContext) {
  nosleep = nosleep || new NoSleep();

  return {
    // Needs to run within click event
    activate: async () => {
      try {
        if (!nosleep.enabled) {
          nosleep.enable();
        }
      } catch (err) {
        console.error("[useNoSleep]", err);
      }
    },
  };
}
