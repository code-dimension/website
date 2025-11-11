import { createSCKParam } from "./create-sck-param";
import { getUtmQueryParamsFromUrl } from "./get-utm-from-url";

export function setUtmParamsToUrl(url: string) {
  const utmParams = getUtmQueryParamsFromUrl();
  const sckParams = createSCKParam(utmParams);

  const urlParams = {
    ...sckParams,
    ...utmParams,
  };

  return createUrl(url, urlParams);
}

function createUrl(url: string, urlParams: Record<string, string>): string {
  const urlInstance = new URL(url);

  for (const key in urlParams) {
    urlInstance.searchParams.set(key, urlParams[key]);
  }

  return urlInstance.toString();
}
