import type { TimerContext } from "./useContext";

export default function useNoSleep(ctx: TimerContext) {
  let nosleep = null as any;
  // @ts-ignore
  import("./nosleep.min.js");

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
