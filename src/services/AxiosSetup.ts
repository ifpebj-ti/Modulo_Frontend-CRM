import axios from 'axios'

const api = axios.create({
  baseURL: 'http://150.136.54.24:8083/api/',
})


export {
  api
}