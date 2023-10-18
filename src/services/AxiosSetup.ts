import axios from 'axios'

const apiAnalise = axios.create({
  baseURL: 'http://150.136.54.24:8083',
})

const apiMarketing = axios.create({
  baseURL: 'http://150.136.54.24:8082',
})

const apiVendas = axios.create({
  baseURL: 'http://150.136.54.24:8081',
})

export {
  apiAnalise, apiMarketing, apiVendas
}