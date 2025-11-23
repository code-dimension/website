export function createUrl(url: string, urlParams: Record<string, string>): string {
  const urlInstance = new URL(url);

  for (const key in urlParams) {
    urlInstance.searchParams.set(key, urlParams[key]);
  }

  return urlInstance.toString();
}
