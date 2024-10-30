import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  // passwordConfirm: z.string().min(3),
});
// .refine(); refs docs

// krok wczesniej ->
// data -> parse -> UI
// validationSchema.parse({
//   email: "zx",
//   password: "sa",
// });

type RegistrationFormDto = z.infer<typeof validationSchema>;
// type RegistrationFormDto = {
//   email: string;
//   password: string;
// };

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormDto>({
    resolver: zodResolver(validationSchema),
  });

  const handleFormData: SubmitHandler<RegistrationFormDto> = async (data) => {
    console.log({ data });
    // const result = await registerUser();, result.success

    // if (result.success) {
    //   toast.success('Oh yes');
    //   history.push('/profile')
    // } else {
    //   toast.error('Oh no');
    // }
  };

  const watchFields = watch(["password"]);
  console.log({ watchFields });

  return (
    <div>
      <p>{watchFields[0]}</p>
      <form onSubmit={handleSubmit(handleFormData)}>
        <TextField
          {...register("email")}
          label="E-mail"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("password")}
          label="Password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {/* <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div> */}
        {/* <div>
          <label htmlFor="password">Password</label>
          <input id="password" {...register("password")} type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </div> */}
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
