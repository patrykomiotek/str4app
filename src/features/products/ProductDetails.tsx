import { AxiosResponse } from 'axios';
import { ApiResponseProduct, getProduct } from '@services/products';
import { useApi } from '../../hooks/useApi';

type Props = {
  id: string;
};

export const ProductDetails = ({ id }: Props) => {
  const { data, isLoading, isError } = useApi<AxiosResponse<ApiResponseProduct>>(() =>
    getProduct(id),
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no, error!</p>;
  }

  return <h1>Product {data?.data.fields.name}</h1>;
};
