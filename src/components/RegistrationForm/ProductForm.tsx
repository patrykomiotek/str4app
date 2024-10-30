import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@ui';
import { CreateProductDto, productSchema } from '@apptypes/types-schema';
import { saveProduct } from '@services/products';

class Mieso {}

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(productSchema),
  });

  const handleProductFormSubmit: SubmitHandler<CreateProductDto> = async (data) => {
    try {
      const response = await saveProduct(data);
      // response.records[0].fields.dimensions
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleProductFormSubmit)}>
      <Input {...register('name')} label="Name" type="text" error={errors.name} />

      <Input
        {...register('description')}
        label="Description"
        type="text"
        error={errors.description}
      />

      <Input
        {...register('price', { valueAsNumber: true })}
        label="Price"
        type="number"
        step="0.01"
        defaultValue="0"
        error={errors.price}
      />

      <Input
        {...register('dimensions', { valueAsNumber: true })}
        label="Dimensions"
        type="number"
        step="0.01"
        defaultValue="0"
        error={errors.dimensions}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};
