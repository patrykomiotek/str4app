import { ProductDetails } from '@components/ProductDetails/ProductDetails';
import { ApiResponseProduct, getProduct } from '@services/products';
import { Header } from '@ui';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type PageParams = {
  id: string;
};

export const ProductDetailsPage = () => {
  // const { data, isLoading, isError } = useApi<ApiResponseProduct>(getProducts);
  // const { data, isLoading, isError } = useApi<ApiResponseProduct>(() => getProduct(id));

  const [data, setData] = useState<ApiResponseProduct | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<string | null>(null);
  const { id } = useParams<PageParams>();
  const navigate = useNavigate();

  // useEffect(() => {

  // }, [isLoading]);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const loadData = async () => {
      try {
        const response = await getProduct(id);
        setData(response.data);
      } catch (error) {
        // if (error instanceof AxiosError) {

        // }
        // if (error instanceof ZodError) {

        // }
        setError('Oh no!');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-red-500">Error: {isError}</div>;
  }

  return (
    <div>
      <Header>Products details</Header>
      {data && <ProductDetails data={data} />}
    </div>
  );
};
