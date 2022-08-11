import axios from 'axios'
export let BASE = 'https://aran-prisma-server.herokuapp.com/'
// export const BASE_TEST = 'http://localhost:5000/'
const dev = process.env.NODE_ENV === 'development'
if (dev) {
  BASE = 'http://localhost:5000/'
}

export const _ME = 'auth/me'
export const LOG_IN = 'auth/login'
export const REGISTER = 'auth/register'
export const PRODUCT = 'product/'
export const CART_PRODUCTS = 'items'
export const ADD_PRODUCT_TO_CART = 'addItem'
export const ORDER = 'order/buy'
// axios.defaults.withCredentials = true
export const publicRequest = axios.create({
  baseURL: BASE,
  withCredentials: true,
})

export const cartReqHandler = axios.create({
  baseURL: BASE + 'cart/',
  withCredentials: true,
})
