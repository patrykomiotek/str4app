import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';

export const Basket = () => {
  const productCount = useSelector((state: RootState) => state.basket.products.length);

  return (
    <div className="flex dark:text-gray-300">
      <ShoppingCartIcon className="cursor-pointer h-5 w-5 mr-4" />
      {productCount}
    </div>
  );
};
