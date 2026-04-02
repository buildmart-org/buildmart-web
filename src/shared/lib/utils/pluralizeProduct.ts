// Функция для склонения слова "продукт" на русском
export const pluralizeProduct = (count: number) => {
  const n = Math.abs(count) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return 'products';
  if (n1 === 1) return 'product';
  return 'products';
};
