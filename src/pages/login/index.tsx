import { Link, replace, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { Input } from "../../components/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useEffect } from "react";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O campo email é obrigatório"),
  password: z
    .string()
    .min(4, "O campo precisa ter no minimo 4 caracteres")
    .max(16, "O campo pode ter no máximo 16 caracteres")
    .nonempty("O campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth);
    }   
    handleLogout();
  },[])

  function onSubmit(data: FormData) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        console.log("Logado com sucesso");
        console.log(user);

        navigate("/dashboard", { replace: true });
      })
      .catch((erro) => {
        console.log("Erro ao logar");
        console.log(erro);
      });
  }
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logo} alt="logo do site" />
        </Link>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white max-w-xl w-full rounded-lg p-4"
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Seu email"
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Sua senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-zinc-900 w-full rounded-md text-white h-10 font-medium"
          >
            Acessar
          </button>
        </form>
        <Link className="hover:text-blue-900 transition-all" to="/register">
          {" "}
          Ainda não possui uma conta? Cadastre-se{" "}
        </Link>
      </div>
    </Container>
  );
}
