export type IProduct = {
  id: number
  name: string
  available: boolean
  price: number
  images: string[]
  thumb: string
  desc: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
  size: string[]
  cateGory?: Array<{
    id: number | string
    name: string
  }>
}
export type OrderLineItem = {
  pid: number | string
  quantity: number
}
export type CartItem = {
  id?: number | string
  quantity: number
  userId?: number
  product: IProduct
}
export type User = {
  id: number
  name: string
  email: string
  pwd: string
  role: Role
}
export type CateGory = {
  id: number
  name: string
}
enum Role {
  ADMIN,
  BASE,
}
