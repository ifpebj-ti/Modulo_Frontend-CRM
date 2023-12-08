import axios from "axios"

const LoginApi = axios.create({
	baseURL: "http://150.136.54.24:4000/api/",
})

export { LoginApi }
