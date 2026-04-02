export const validateRating = (
  value: string | number | undefined,
): number | undefined | null => {
  if (value === '' || value === undefined || value === null) {
    return undefined;
  }

  const num = Number(value);

  if (!isNaN(num) && num >= 0 && num <= 5) {
    return num;
  }

  return null;
};
