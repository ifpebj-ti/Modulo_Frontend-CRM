import axios from 'axios'

const marketingApi = axios.create({
  baseURL: 'http://150.136.54.24:8082/api/',
})


export {
  marketingApi
}