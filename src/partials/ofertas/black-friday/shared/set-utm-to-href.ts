import { createSearchParamsUsingUtmFromUrl } from "./create-search-params-using-utm";

export function setUtmToHref(anchorSelector: string) {
  const urlParams = createSearchParamsUsingUtmFromUrl();

  const buyBtnEl = document.querySelector(anchorSelector);
  const href = buyBtnEl.getAttribute("href");

  if (urlParams.size === 0) {
    return;
  }

  buyBtnEl.setAttribute("href", `${href}?${urlParams.toString()}`);
}
