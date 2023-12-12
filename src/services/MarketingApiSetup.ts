import { getSession } from "next-auth/react"
import axios from "axios"

const marketingApi = axios.create({
	baseURL: "http://150.136.54.24:8082/api/",
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
