import { getSession } from "next-auth/react"
import axios from "axios"

const marketingApi = axios.create({
	baseURL: "https://localhost:7094/api/",
})

marketingApi.interceptors.request.use(
	async (config) => {
		const session = await getSession()

		if (session) {
			config.headers.Authorization = `Bearer ${(session as any).usuario}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export { marketingApi }
