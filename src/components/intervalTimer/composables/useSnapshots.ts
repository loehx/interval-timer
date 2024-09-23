import type { TimerContext } from "./useContext";
import { isRef, watch } from "vue";

const BLACKLIST = ["snapshots", "stringified"];

export default function useSnapshots(ctx: TimerContext) {
  let masterSnapshop = {} as Record<string, any>;

  const makeSnapshot = () => {
    const snapshot = {} as Record<string, any>;

    for (const key in ctx) {
      if (BLACKLIST.includes(key)) continue;
      const refValue = ctx[key as keyof TimerContext];
      const value = isRef(refValue) ? refValue.value : refValue;
      const stringValue = JSON.stringify(value);

      if (masterSnapshop[key] === stringValue) continue;
      snapshot[key] = value;
      masterSnapshop[key] = stringValue;
    }

    if (Object.keys(snapshot).length === 0) return;
    ctx.snapshots.push(clone(snapshot));
    if (ctx.snapshots.length > 50) {
      ctx.snapshots.shift();
    }
  };

  for (const key in ctx) {
    const refValue = ctx[key as keyof TimerContext];
    if (isRef(refValue)) {
      watch(refValue, makeSnapshot);
    }
  }
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
