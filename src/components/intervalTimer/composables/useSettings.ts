import { useRoute } from "vue-router";
import type { TimerContext } from "./useContext";

export default function useSettings(ctx: TimerContext) {
  const route = useRoute();
  const { hiit } = route.query || {};

  if (hiit) {
    const [workout, pause] = (hiit as string).split("/").map(Number);
    ctx.workoutTime.value = workout;
    ctx.pauseTime.value = pause;
  }
}
