import { ProductsList } from '@components/ProductsList/ProductsList';
import useApi from '@hooks/useApi';
import { ApiResponseProduct, ApiResponseProducts, getProducts } from '@services/products';
import { useQuery } from '@tanstack/react-query';
import { Button, Header } from '@ui';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ZodError } from 'zod';

export const ProductsListPage = () => {
  const [count, setCount] = useState(0);
  // setCount(1); // troll

  // #3
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['products-list'],
    queryFn: getProducts,
  });

  const calculatedValue = useMemo(() => {
    return new Date(); // complex calculations ;)
  }, [count]);
  // const calculatedValue = () => {
  //   return new Date(); // complex calculations ;)
  // };

  const handleAlert = useCallback(() => {
    alert('Hello');
  }, []);

  // #2
  // const { data, isLoading, isError } = useApi<AxiosResponse<ApiResponseProducts>>(getProducts);

  // # 1
  // const [data, setData] = useState<ApiResponseProduct[]>([]);
  // const [isLoading, setLoading] = useState(true);
  // const [isError, setError] = useState<string | null>(null);

  // useEffect(() => {}, [isLoading]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const response = await getProducts();
  //       setData(response.data.records);
  //     } catch (error) {
  //       // if (error instanceof AxiosError) {

  //       // }
  //       // if (error instanceof ZodError) {

  //       // }
  //       setError('Oh no!');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-red-500">Error: {isError}</div>;
  }

  const products = data?.data.records;

  return (
    <div>
      <Header>Products list</Header>
      {/* <Button onClick={() => refetch()}>Refetch</Button> */}
      {/* <p>{count}</p> */}
      {/* <Button onClick={() => refetch()}>Refetch</Button> */}
      {/* <Button onClick={setCount}>Refetch</Button> */}
      {/* <button onClick={alert('Hello')}>Click me</button> // źle */}
      {/* <button onClick={() => alert('Hello')}>Click me</button> */}
      {/* <button onClick={alert}>Click me</button> */}

      <button onClick={() => alert('Hello')}>Click me</button>
      <button onClick={handleAlert}>Click me</button>

      <p>{calculatedValue.toLocaleTimeString()}</p>

      <Button onClick={() => setCount(count + 1)}>{count}</Button>

      {products && <ProductsList products={products} />}
    </div>
  );
};
