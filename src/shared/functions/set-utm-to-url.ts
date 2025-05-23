export function setUtmParamsToUrl(url: string) {
  const utmParams = getUtmQueryParamsFromUrl();

  const urlInstance = new URL(url);

  for (const key in utmParams) {
    urlInstance.searchParams.set(key, utmParams[key]);
  }

  return urlInstance.toString();
}

function getUtmQueryParamsFromUrl(): Record<string, string> {
  const url = new URL(window.location.href);

  const [_, queryParams] = url.search.split("?");

  if (!queryParams) {
    return {} as Record<string, string>;
  }

  const keyValueArray = queryParams.split("&");

  const queryParamsObject = keyValueArray.reduce((acc, keyValue) => {
    const [key, value] = keyValue.split("=");

    if (!key || !value) {
      return acc;
    }

    if (key.startsWith("utm_")) {
      acc[key] = value; 
    }

    return acc;
  }, {} as Record<string, string>);

  return queryParamsObject;
}
