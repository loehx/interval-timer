import { ref } from "vue";

export type TimerState = "start" | "workout" | "pause";

const ctx = {
  counter: ref(0),
  initialCounter: ref(0),
  formattedCounter: ref("0"),

  // Timer settings
  // can be overridden by query params
  times: {
    workout: 30,
    pause: 30,
    start: 5,
  },
  states: ["start", "workout", "pause"] as TimerState[],
  currentState: ref<TimerState>("start"),
  isPaused: ref(true),
  stringified: ref(""),
  snapshots: [] as Record<string, unknown>[],
  queryParams: ref({} as Record<string, string>),
  isMuted: ref(false),
  backgroundColor: ref("#c9d658"),
  fontColor: ref("#000"),
  isTouch: ref(false),
};

// @ts-ignore
window.ctx = ctx;

export type TimerContext = typeof ctx;

export default function useContext() {
  return ctx;
}
