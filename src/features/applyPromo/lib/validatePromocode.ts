export function validatePromocode(code: string) {
  const trimmed = code.trim();

  if (!trimmed) return null;
  if (trimmed.length < 3) return null;

  return trimmed.toUpperCase();
}
