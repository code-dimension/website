export function setUtmParamsToUrl(url: string) {
  const utmParams = getUtmParamsFromUrl();

  const urlInstance = new URL(url);

  utmParams.forEach(([key, value]) => {
    urlInstance.searchParams.set(key, value);
  });

  return urlInstance.toString();
}

function getUtmParamsFromUrl(): string[][] {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  return params
    .entries()
    .filter(([key, value]) => key.startsWith("utm_"))
    .toArray();
}
