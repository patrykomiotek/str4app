// const { data, isLoading, isError } = useApi<ApiResponseProduct>(getProducts);
// const { data, isLoading, isError } = useApi<ApiResponseProduct>(() => getProduct(id));

// export const useApi

import { useState, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { ZodError } from 'zod';

type ApiFunction<T> = () => Promise<AxiosResponse<T>>;

// discriminated union
type State<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

// const myState: State<[]> = {
//   data: undefined,
//   isLoading: true,
//   isError: false
// }

// data, isLoading = true, isError = true

// export const useApi = <T>(fetcher: () => Promise<AxiosResponse<T>>) => {
export const useApi = <T>(fetcher: () => Promise<T>) => {
  const [state, setState] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });
  const { data, isLoading, isError } = state;

  const loadData = async () => {
    try {
      const response = await fetcher();

      setState({
        data: response,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      // error
      setState({
        data: undefined,
        isLoading: false,
        isError: true,
      });
    }
  };

  // TODO: cancelation
  useEffect(() => {
    loadData();
  }, []);

  const refetch = () => {
    loadData();
  };

  return { data, isLoading, isError, refetch };
};

// const useApi = <T>(apiFunction: ApiFunction<T>) => {
//   const [data, setData] = useState<T | undefined>(undefined);
//   const [isLoading, setLoading] = useState(true);
//   const [isError, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await apiFunction();
//         setData(response.data);
//         // setError('yolo!');
//       } catch (error) {
//         if (error instanceof AxiosError) {
//           setError(`Network error: ${error.message}`);
//         } else if (error instanceof ZodError) {
//           setError(`Data validation error: ${error.message}`);
//         } else {
//           setError('An unexpected error occurred');
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [apiFunction]);

//   return { data, isLoading, isError };
// };

// import { useEffect, useState } from 'react';
// import { ApiResponseProduct, ApiResponseProducts } from '@services/products.ts';
// import { AxiosResponse } from 'axios';
// import { ProductDto } from '@apptypes/types-schema.ts';

// type Props = {
//   getProducts: (id: ProductDto['id']) => Promise<AxiosResponse<ApiResponseProducts>>
// }

// export const useFetchProductData = ({getProducts}: Props) => {
//   const [data, setData] = useState<ApiResponseProduct[]>([]);
//   const [isLoading, setLoading] = useState(true);
//   const [isError, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await getProducts('');
//         setData(response.data.records);
//       } catch (error) {
//         setError('Oh no!');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   return { data, isLoading, isError };
// }

export default useApi;
