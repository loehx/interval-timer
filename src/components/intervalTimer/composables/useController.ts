import { type TimerContext, type TimerState } from "./useContext";

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
    skip: () => {
      ctx.counter.value = 0;
    },
    promptIntervals: () => {
      const keys = ["workout", "pause", "start"] as TimerState[];
      const placeholder = keys.map((key) => ctx.times[key]).join(" ");
      const input = prompt(
        `Enter intervals in the format: "workout pause" or "workout pause start"`,
        placeholder
      );
      if (!input?.trim()) return;
      const numberInputs = /\d+/g.exec(input) || [];
      const intervals = numberInputs.map(Number);

      const url = new URL(window.location.href);
      const parsed = keys.map((key, index) => {
        const n = intervals[index];
        if (n > 0) url.searchParams.set(key, String(n));
        return n;
      });

      if (!parsed.filter(Boolean).length) {
        alert(
          `What do you mean by: "${input}"? 🤔\nPlease follow the format as described. ✌️`
        );
      }

      location.href = url.toString();
    },
  };
}
