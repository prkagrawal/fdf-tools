export function createFdf(fields: Record<string, string>): string {
  let fdf = `%FDF-1.2
  %âãÏÓ
  1 0 obj
  <<
  /FDF << /Fields [`;

  for (const [key, value] of Object.entries(fields)) {
    fdf += `<</T (${key})/V (${value})>>`;
  }

  fdf += `] >>
  >>
  endobj
  trailer
  <<
  /Root 1 0 R
  >>
  %%EOF`;

  return fdf;
}
