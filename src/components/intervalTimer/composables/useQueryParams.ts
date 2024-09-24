import { useRoute } from "vue-router";
import type { TimerContext } from "./useContext";
import { watch } from "vue";

export default function useQueryParams(ctx: TimerContext) {
  ctx.queryParams.value = getQueryParams();

  watch(ctx.queryParams, (queryParams) => {
    const queryString = toQueryString(queryParams);
    const url = new URL(location as any);
    url.search = queryString;
    history.pushState({}, "", url);
  });
}

function getQueryParams() {
  const query = location.search.slice(1);
  const params = query.split("&");
  return params.reduce((acc, param) => {
    const [key, value] = param.split("=");
    if (!key || !value) return acc;
    return { ...acc, [key]: decodeURIComponent(value) };
  }, {}) as Record<string, string>;
}

function toQueryString(params: Record<string, string>) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
}
