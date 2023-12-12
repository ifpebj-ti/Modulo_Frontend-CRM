import axios from "axios"
import { getSession } from "next-auth/react"

const salesApi = axios.create({
	baseURL: "http://150.136.54.24:8088/api/",
})

salesApi.interceptors.request.use(
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

export { salesApi }
