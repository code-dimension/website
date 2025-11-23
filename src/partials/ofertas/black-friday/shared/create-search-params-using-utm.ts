import { createSCKParam } from "@shared/functions/create-sck-param";
import { getUtmQueryParamsFromUrl } from "@shared/functions/get-utm-from-url";

export function createSearchParamsUsingUtmFromUrl() {
  const urlParams = new URLSearchParams();

  const utmParams = getUtmQueryParamsFromUrl();

  if (Object.keys(utmParams).length === 0) {
    return urlParams;
  }

  for (const key in utmParams) {
    urlParams.append(key, utmParams[key]);
  }

  const sckParams = createSCKParam(utmParams);
  urlParams.append("sck", sckParams.sck);

  return urlParams;
}
