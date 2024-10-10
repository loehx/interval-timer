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
      const placeholder = keys
        .map((key) => formatInterval(ctx.times[key]))
        .join(" ");
      const input = prompt(
        `Enter intervals in the format: "workout pause" or "workout pause start"`,
        placeholder
      );
      if (!input?.trim()) return;
      const numberInputs = input.split(" ");
      const intervals = numberInputs.map(parseInterval);

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

function parseInterval(input: string): number {
  const [minutes, seconds] = input.split(":");
  if (seconds) {
    return Number(minutes) * 60 + Number(seconds);
  }
  return Number(input);
}

function formatInterval(seconds: number): string {
  if (seconds < 60) return String(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}
