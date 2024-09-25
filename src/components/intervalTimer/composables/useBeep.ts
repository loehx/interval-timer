import { ref, watch } from "vue";
import type { TimerContext } from "./useContext";

export default function useBeep(ctx: TimerContext) {
  watch(ctx.counter, () => {
    if (ctx.counter.value > 3) return;
    beep({ frequency: 800, duration: 100, volume: 0.05 });
  });

  watch(ctx.currentState, () => {
    beep({ frequency: 800, duration: 600, volume: 0.1 });
  });
}

window.beep = beep;

function beep(params: { frequency: number; duration: number; volume: number }) {
  var context = new AudioContext();
  var oscillator = context.createOscillator();
  var gainNode = context.createGain();

  // Set the oscillator properties
  oscillator.type = "sine";
  oscillator.frequency.value = params.frequency; // set your desired frequency

  // Set the volume (0.0 is silent, 1.0 is full volume)
  gainNode.gain.value = params.volume; // Adjust the volume as needed

  // Connect the nodes
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  // Start the oscillator
  oscillator.start();

  // Beep for x milliseconds
  setTimeout(function () {
    oscillator.stop();
  }, params.duration);
}
