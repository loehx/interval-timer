import type { TimerContext } from "./useContext";

const ALL_COLORS = [
  "#f5f5f5",
  "#383838",
  "#58c5d6",
  "#58d6bb",
  "#58d682",
  "#9dd658",
  "#c9d658",
  "#d66558",
  "#589dd6",
  "#b458d6",
  "#d658bb",
];

export default function useColor(ctx: TimerContext, setup: boolean) {
  function setBackgroundColor(color: string) {
    ctx.backgroundColor.value = color;
    ctx.fontColor.value = isBrightColor(color) ? "#000" : "#fff";
    ctx.queryParams.value = {
      ...ctx.queryParams.value,
      color: color.replace("#", ""),
    };
    document
      .querySelector('[name="theme-color"]')
      ?.setAttribute("content", color);
  }

  if (setup) {
    if (ctx.queryParams.value.color) {
      setBackgroundColor("#" + ctx.queryParams.value.color);
    } else {
      setBackgroundColor("#f5f5f5");
    }
  }

  return {
    toggleColor: () => {
      const currentIndex = ALL_COLORS.indexOf(ctx.backgroundColor.value);
      const nextIndex =
        currentIndex === ALL_COLORS.length - 1 ? 0 : currentIndex + 1;
      setBackgroundColor(ALL_COLORS[nextIndex]);
    },
  };
}

function isBrightColor(color: string) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return r * 0.299 + g * 0.587 + b * 0.114 > 150;
}
