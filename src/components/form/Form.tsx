// Componentes
import { Input } from "../input/Input";

// Função de registro
import { useRegister } from "./useRegister";

export default function Form() {
  const { handleSubmit, handleForm, register, errors } = useRegister();

  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-8">
      <h2 className="text-4xl text-sky-900">Cadastro de usuário</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleForm)}>
        <Input {...register("username")} type="text" label="Username" />
        {errors.username && (
          <p className="text-sm text-red-500 italic">
            {errors.username?.message}
          </p>
        )}
        <Input {...register("email")} type="text" label="Email" />
        {errors.email && (
          <p className="text-sm text-red-500 italic">{errors.email?.message}</p>
        )}

        <Input {...register("password")} type="password" label="Senha" />
        {errors.password && (
          <p className="text-sm text-red-500 italic">
            {errors.password?.message}
          </p>
        )}

        <Input
          {...register("confirmpassword")}
          type="password"
          label="Confirme sua senha"
        />
        {errors.confirmpassword && (
          <p className="text-sm text-red-500 italic">
            {errors.confirmpassword?.message}
          </p>
        )}

        <div className="rounded p-2 bg-green-600 hover:bg-green-700 text-white cursor-pointer flex items-center justify-center">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
