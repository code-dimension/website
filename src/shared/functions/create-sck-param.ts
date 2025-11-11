export function createSCKParam(utmParams: Record<string, string>): { sck?: string } {
  const utmParamsArray = [
    utmParams.utm_source,
    utmParams.utm_medium,
    utmParams.utm_campaign,
    utmParams.utm_term,
    utmParams.utm_content,
  ];

  const sckParamValue = utmParamsArray.filter(Boolean).join("|");

  if (!sckParamValue) {
    return {};
  }

  return {
    sck: sckParamValue,
  };
}
