import axios from 'axios'
export const BASE = 'https://aran-prisma-server.herokuapp.com/'
export const BASE_TEST = 'http://localhost:5000/'
export const _ME = 'auth/me'
export const _LOG_IN = 'auth/login'
export const _REGISTER_IN = 'auth/register'
export const _ALL_PRODUCTS = 'product/'
export const CART_PRODUCTS = 'items'
export const ADD_PRODUCT_TO_CART = 'addItem'
export const ORDER = 'order/buy'
// axios.defaults.withCredentials = true
export const publicRequest = axios.create({
  baseURL: BASE_TEST,
  withCredentials: true,
})

export const cartReqHandler = axios.create({
  baseURL: BASE_TEST + 'cart/',
  withCredentials: true,
})