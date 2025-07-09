export function setUtmParamsToUrl(url: string) {
  const utmParams = getUtmQueryParamsFromUrl();
  const sckParams = createSCKParam(utmParams);
  
  const urlParams = {
    ...sckParams,
    ...utmParams
  }
  
  return createUrl(url, urlParams);
}

function createUrl(url: string, urlParams: Record<string, string>): string {
  const urlInstance = new URL(url);
  
  for (const key in urlParams) {
    urlInstance.searchParams.set(key, urlParams[key]);
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

function createSCKParam(utmParams: Record<string, string>): Record<string, string> {
    const utmParamsArray = [utmParams.utm_source, utmParams.utm_medium, utmParams.utm_campaign, utmParams.utm_term, utmParams.utm_content];

    const sckParamValue = utmParamsArray.filter(Boolean).join("|");
    
    if (!sckParamValue) {
      return {} as Record<string, string>;
    }

    return {
      sck: sckParamValue 
    } 
}
