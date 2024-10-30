import { ApiResponseProduct } from '@services/products';

export const ProductDetails = ({ data }: { data: ApiResponseProduct }) => {
  return (
    <div>
      <h2>{data.fields.name}</h2>
      <p>{data.fields.description}</p>
    </div>
  );
};
