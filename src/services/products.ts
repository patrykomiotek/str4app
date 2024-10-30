import { AxiosResponse } from 'axios';
import { CreateProductDto, ProductDto } from '../types/types-schema';
import { api } from './api';

// webpack: process.env.NAME;
const AIRTABLE_API_URL = import.meta.env.VITE_API_BASE_URL;
const AIRTABLE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

interface ProductFields {
  fields: {
    price: number;
    description: string;
    dimensions: number;
    name: string;
    created_at?: string;
    updated_at?: string;
  };
}

export interface ApiResponseProduct {
  id: string;
  createdTime: string;
  fields: {
    price: number;
    description: string;
    dimensions: number;
    name: string;
    created_at?: string;
    updated_at?: string;
  };
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// const myResponse: Readonly<ApiResponseProduct> = {
const myResponse: DeepReadonly<ApiResponseProduct> = {
  // const myResponse: ApiResponseProduct = {
  id: 'abc',
  createdTime: '34324453',
  fields: {
    description: 'a',
    dimensions: 1,
    price: 2,
    name: 'b',
  },
};
// myResponse.id = 'sth';
// myResponse.createdTime = 'sth';
// myResponse.fields.description = 'sth';

export interface ApiResponseProducts {
  records: ApiResponseProduct[];
}

interface ApiResponse<T> {
  records: T[];
}

declare const response: ApiResponse<ProductFields>;
// const response: ApiResponse<ProductFields> = {
//   records: [
//     {
//       fields: {
//         name: 'one',
//         description: 'two',
//         price: 123,
//         dimensions: 32,
//       },
//     },
//   ],
// };

export const saveProduct = async (data: CreateProductDto) => {
  const response = await fetch(`${AIRTABLE_API_URL}/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          fields: data,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit the form');
    // throw new Mieso('Failed to submit the form');
  }

  // return response.json() as unknown as ApiResponse<ProductFields>; TAK NIE!!!
  return response.json() as Promise<ApiResponse<ProductFields>>;
};

// export const getProducts = async (): Promise<ApiResponseProducts> => {
//   const response = await fetch(`${AIRTABLE_API_URL}/products?maxRecords=100&view=Grid%20view`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch products');
//   }

//   return response.json();
// };

export const getProducts = async (): Promise<AxiosResponse<ApiResponseProducts>> => {
  return api.get('/products');
};

export const getProduct = async (
  id: ProductDto['id'],
): Promise<AxiosResponse<ApiResponseProduct>> => {
  return api.get(`/products/${id}`);
};

export interface UpdateProductDto extends Partial<CreateProductDto> {
  id: string;
}

export const updateProduct = async (
  data: UpdateProductDto,
): Promise<ApiResponse<ProductFields>> => {
  const response = await fetch(`${AIRTABLE_API_URL}/products`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [
        {
          id: data.id,
          fields: {
            name: data.name,
            description: data.description,
            price: data.price,
            dimensions: data.dimensions,
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update the product');
  }

  return response.json();
};
