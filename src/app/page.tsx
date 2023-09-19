"use client";
import Image from "next/image";
import CavalcanteLogo from "../../public/logo.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col items-center gap-6 rounded-3xl  pt-7 pb-7 pr-6 pl-6 border-gray-200 bg-white shadow-lg">
        <div>
          <Image src={CavalcanteLogo} alt={"Logo da Farmácia Cavalcante"} />
        </div>
        <div>
          <span className="text-lg leading-6 mb-2 text-[#5B5E71]">Email</span>
          <Input type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <span className="text-lg leading-6 mb-2 text-[#5B5E71]">Senha</span>
          <Input type="password" placeholder="Digite sua Senha" />
        </div>
        <div>
          <span>
            Esqueceu a senha? <strong>Redefina sua senha</strong>
          </span>
        </div>
        <div>
          <Button onClick={()=> router.push("/dashboard")}>Entrar</Button>
        </div>
      </div>
    </div>
  );
}
