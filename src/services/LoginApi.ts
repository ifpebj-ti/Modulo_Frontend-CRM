import { credentialsProps } from "@/types/Credentials"
import { LoginApi } from "./LoginApiSetup"
import https from "https"

const agent = new https.Agent({
	rejectUnauthorized: false, // Esta opção permite aceitar certificados autoassinados
})

export const Login = async (credentials: credentialsProps) => {
	try {
		const response = await LoginApi.post("Usuario/FazerLogin", credentials, {
			httpsAgent: agent, // Usa o agente HTTPS personalizado
		})
		console.log(response)
		return response // Retorna a resposta completa da API, incluindo o status
	} catch (error) {
		// Trate o erro aqui, se necessário
		throw error // Rejeita a promessa com o erro para que ele possa ser tratado no chamador
	}
}
