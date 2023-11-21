import axios from 'axios'

const salesApi = axios.create({
  baseURL: 'http://150.136.54.24:8088/api/',
})


export {
  salesApi
}