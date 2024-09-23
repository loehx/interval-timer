import { useRoute } from "vue-router";
import type { TimerContext } from "./useContext";

export default function useSettings(ctx: TimerContext) {
  const queryParams = getQueryParams();

  // Set initial values from query params
  ctx.states.forEach((state) => {
    if (state in queryParams) {
      const value = queryParams[state];
      const numberValue = Number(value);
      if (!isNaN(numberValue)) {
        ctx.times[state] = numberValue;
      }
    } else {
      queryParams[state] = String(ctx.times[state]);
    }
  });

  // Update query params on change
  const queryString = toQueryString(queryParams);
  const url = new URL(location as any);
  url.search = queryString;
  history.pushState({}, "", url);
}

function getQueryParams() {
  const query = location.search.slice(1);
  const params = query.split("&");
  return params.reduce((acc, param) => {
    const [key, value] = param.split("=");
    if (!key || !value) return acc;
    return { ...acc, [key]: value };
  }, {}) as Record<string, string>;
}

function toQueryString(params: Record<string, string>) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
