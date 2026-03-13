import { PageError } from '@/widgets/PageError';
import { useState } from 'react';
import { Button } from '@/shared/ui';

export const ProductsPage = () => {
  const [hasError, setHasError] = useState(false);

  const handleErrorThrowCLick = () => {
    setHasError(true); // Просто показываем страницу ошибки
  };

  if (hasError) {
    return <PageError />; // Показываем страницу ошибки
  }

  return (
    <>
      <h1>PRODUCTS PAGE</h1>
      <Button theme="primary" onClick={handleErrorThrowCLick}>
        Throw Error
      </Button>
    </>
  );
};

export default ProductsPage;
