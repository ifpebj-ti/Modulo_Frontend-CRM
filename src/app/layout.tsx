import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Providers from "./providers"

import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "CRM - Cavalcante",
	description: "Esse é o sistema de gerenciamento do CRM da Cavalcante",
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="icon" type="image/png" href="/logo-white-cavalcante.svg" />
			</head>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
