import type { TimerContext } from "./useContext";

export default function useThemeController(ctx: TimerContext) {
  const colors = [
    "#fee3ee",
    "#fcf3e4",
    "#fcdcc8",
    "#c8e0cf",
    "#faebc7",
    "#d2d2cf",
  ];

  return {
    toggleColor: () => {
      const currentIndex = colors.indexOf(ctx.backgroundColor.value);
      const nextIndex = (currentIndex + 1) % colors.length;
      ctx.backgroundColor.value = colors[nextIndex];
    },
  };
}
