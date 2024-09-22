import { ref } from "vue";

export type TimerState = "workout" | "pause";

const ctx = {
  counter: ref(0),
  workoutTime: ref(30),
  pauseTime: ref(30),
  state: ref<TimerState>("workout"),
  isRunning: ref(false),
  isPaused: ref(false),
};

export type TimerContext = typeof ctx;

export default function useContext() {
  return ctx;
}
