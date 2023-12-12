import { credentialsProps } from "@/types/Credentials"
import { Login } from "@/services/LoginApi"
import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
	providers: [
		Credentials({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				senha: { label: "senha", type: "password" },
			},
			async authorize(credentials, req) {
				console.log(credentials)
				var loginCredentials: credentialsProps = {
					email: credentials?.email as string,
					senha: credentials?.senha as string,
				}

				try {
					const response = await Login(loginCredentials)

					if (response.status === 200) {
						const user = response.data // Certifique-se de usar a propriedade correta para acessar os dados da resposta
						return user // Retorna o objeto de usuário se o login for bem-sucedido
					} else {
						return response.data // Retorna null se o login falhar
					}
				} catch (error) {
					return null // Retorna null se houver um erro durante o login
				}
			},
		}),
	],
	pages: {
		signIn: "/",
	},
	session: {
		maxAge: 60 * 240,
	},
	callbacks: {
		async jwt({ token, user }) {
			user && (token.usuario = user)
			return token
		},
		async session({ session, token }) {
			session = token as any
			return session
		},
	},
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
