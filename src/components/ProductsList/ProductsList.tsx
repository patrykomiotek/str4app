import { ApiResponseProduct } from '@services/products';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Route } from 'routes';
import { add } from '../../features/products/basketSlice';
import { Dispatch } from '@reduxjs/toolkit';

type Props = {
  products: ApiResponseProduct[];
};

const ProductTableRow = ({
  product,
  dispatch,
}: {
  product: ApiResponseProduct;
  dispatch: Dispatch;
}) => (
  <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="py-2 px-4">
      <Link
        to={Route.PRODUCTS_DETAILS.dynamicPath?.(product.id) as string} // ;)
        // href={`/products/${product.id}`}
        className="text-blue-500 hover:underline focus:outline-none"
      >
        {product.fields.name}
      </Link>
    </td>
    <td className="py-2 px-4">${product.fields.price}</td>
    <td className="py-2 px-4">{product.fields.description}</td>
    <td className="py-2 px-4">{product.fields.dimensions}</td>
    <td className="py-2 px-4">
      <span onClick={() => dispatch(add(product))} className="ml-4 cursor-pointer">
        Add
      </span>
    </td>
  </tr>
);

export const ProductsList = ({ products }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700 dark:text-slate-300">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Dimensions</th>
            <th className="py-3 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody className="dark:text-slate-300">
          {products.map((product) => (
            <ProductTableRow key={product.id} product={product} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
