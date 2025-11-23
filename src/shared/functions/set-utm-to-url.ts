import { createSCKParam } from "./create-sck-param";
import { createUrl } from "./create-url";
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
