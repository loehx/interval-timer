import { ref } from "vue";

export type TimerState = "start" | "workout" | "pause";

const ctx = {
  counter: ref(0),
  initialCounter: ref(0),
  progress: ref(0),
  formattedCounter: ref("0"),

  // Timer settings
  // can be overridden by query params
  times: {
    workout: 30,
    pause: 30,
    start: 3,
  },
  states: ["start", "workout", "pause"] as TimerState[],
  currentState: ref<TimerState>("start"),
  isRunning: ref(false),
  isPaused: ref(false),
  stringified: ref(""),
  snapshots: [] as Record<string, unknown>[],
};

window.ctx = ctx;

export type TimerContext = typeof ctx;

export default function useContext() {
  return ctx;
}
