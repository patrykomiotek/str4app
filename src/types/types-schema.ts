import { z as zod } from 'zod';

// email
// password
// language

export const registrationSchema = zod
  .object({
    email: zod.string().email({ message: 'Oh no! ' }),
    password: zod.string().min(3, { message: 'Password is too short' }), // per field .refine(),
    confirmPassword: zod.string().min(3, { message: 'Password is too short' }),
    language: zod.string().min(1),
  })
  // .pick
  // .omit
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  });

export type RegistrationDto = zod.infer<typeof registrationSchema>;

// test('should pass', () => {
//   const inputData = {}
//   expect(registrationSchema.parse(inputData)).toStrictEqual()
// })

// type RegistrationData = {
//   email: string;
//   password: string;
//   language: string;
//   confirmPassword: string;
// };

// User.parse({ username: "Ludwig" });

export const productSchema = zod.object({
  name: zod.string().min(1, { message: "What's the hane?" }),
  description: zod.string().min(1, { message: ' Put some desc' }),
  price: zod.number().positive(),
  dimensions: zod.number().positive(),
});

export type CreateProductDto = zod.infer<typeof productSchema>;

export type ProductDto = CreateProductDto & { id: string };
