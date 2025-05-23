export function queryBuilder(
  baseUrl: string,
  params: Record<string, string | number | boolean | undefined | null>
): string {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.append(key, value.toString());
    }
  });

  return `${baseUrl}?${query.toString()}`;
}
