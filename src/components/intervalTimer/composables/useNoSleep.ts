import type { TimerContext } from "./useContext";
import "./nosleep.min.js";

export default function useNoSleep(ctx: TimerContext) {
  let nosleep = null as any;

  return {
    // Needs to run within click event
    activate: async () => {
      try {
        nosleep = nosleep || new (window as any).NoSleep();
        if (!nosleep.enabled) {
          nosleep.enable();
        }
      } catch (err) {
        console.error("[useNoSleep]", err);
      }
    },
  };
}
