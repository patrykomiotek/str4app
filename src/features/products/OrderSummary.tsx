import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { MinusIcon } from '@heroicons/react/20/solid';
import { remove } from './basketSlice';

export const OrderSummary = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.basket.products);

  return (
    <div className="dark:text-slate-300">
      <ul>
        {products.map((elem, index) => (
          <li key={`${elem.id}-${index}`}>
            <div className="flex">
              {elem.fields.name}{' '}
              <MinusIcon
                onClick={() => dispatch(remove(elem.id))}
                className="ml-2 h-5 w-5 border-2 cursor-pointer"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
