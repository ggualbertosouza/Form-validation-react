import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formProps, schema } from "./schema";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });

  const handleForm = (data: formProps) => console.log(data);

  return {
    register,
    handleSubmit,
    handleForm,
    errors,
    useRegister,
  };
};
