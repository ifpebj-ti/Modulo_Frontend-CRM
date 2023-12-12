"use client"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

import CavalcanteLogo from "/public/logo.svg"

import Footer from "@/components/Footer"
import { SyntheticEvent, useState } from "react"

export default function Home() {
	const router = useRouter()
	const [email, setEmail] = useState<string>("")
	const [senha, setSenha] = useState<string>("")
	const [erro, setErro] = useState<string>("")
	const [loading, setLoading] = useState(false)

	const login = async (event: SyntheticEvent) => {
		event.preventDefault()
		setLoading(true)

		const result = await signIn("credentials", {
			email,
			senha,
			redirect: false,
		})

		if (result?.error) {
			setLoading(false) // Atualiza o estado de loading para false após o processo de autenticação
			setErro("Email ou senha inválidos")
			return
		}

		router.push("/dashboard")
	}

	return (
		<main className=" h-screen w-screen flex flex-col">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="flex flex-col items-center gap-6 rounded-3xl pt-7 pb-7 pr-6 pl-6 border-gray-200 bg-white shadow-lg">
					<div>
						<Image src={CavalcanteLogo} alt={"Logo da Farmácia Cavalcante"} />
					</div>
					<form onSubmit={login}>
						<div className="flex flex-col mb-2">
							<span className="text-lg leading-6 mb-2 text-[#5B5E71]">
								Email
							</span>
							<input
								type="email"
								name="email"
								className="rounded-lg border-gray-300 bg-gray-200 w-[350px] h-[60px] p-3 mt-2"
								id="email"
								onChange={(event: any) => setEmail(event.target.value)}
								placeholder="Digite seu email"
							/>
						</div>
						<div className="flex flex-col mb-2">
							<span className="text-lg leading-6 mb-2 text-[#5B5E71]">
								Senha
							</span>
							<input
								type="password"
								name="senha"
								id="senha"
								className="rounded-lg border-gray-300 bg-gray-200 w-[350px] h-[60px] p-3 mt-2"
								onChange={(event: any) => setSenha(event.target.value)}
								placeholder="Digite sua Senha"
							/>
						</div>
						<div className="mb-3">
							<span>
								Esqueceu a senha? <strong>Redefina sua senha</strong>
							</span>
						</div>
						{erro && <p className="text-red-500 mb-3">{erro}</p>}
						<div>
							<button
								className="w-full flex justify-center gap-x-3 bg-fc-color-300 text-white py-2 rounded-lg"
								type="submit"
								disabled={loading} // Desabilita o botão durante o carregamento
							>
								{loading ? "Carregando" : "Entrar"}
								{loading && (
									<div role="status">
										<svg
											aria-hidden="true"
											className="inline w-4 h-4 mr-2 text-gray-200 animate-spin fill-blue-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
									</div>
								)}{" "}
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="h-[8vh]">
				<Footer />
			</div>
		</main>
	)
}
