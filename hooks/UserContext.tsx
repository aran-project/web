import { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../reduc/cartReducer'
import {
  ADD_PRODUCT_TO_CART,
  cartReqHandler,
  CART_PRODUCTS,
  publicRequest,
  _ME,
} from '../utils/apiEndpoints'
import { CartItem, User } from '../utils/globals'

type state = {
  user: User | null
  logged: boolean
  err: string
  addItemsToCart: (payload: CartItem) => Promise<number | boolean>
  login: () => void
}
async function addItemsToCart({ product: { id }, quantity }: CartItem) {
  const res = await cartReqHandler.post(ADD_PRODUCT_TO_CART, {
    pid: id,
    quantity,
  })
  if (!res.data || res.data.err) {
    console.log('FETCH_CART ISSUES')
    return false
  }
  console.log('added to the cart ', res.data)
  return res.data.id
}

const defautlState: state = {
  user: null,
  logged: false,
  err: '',
  addItemsToCart,
  login: () => {},
}

export const UserContext = createContext(defautlState)

export default function UserProvider(props: any) {
  const [user, setUser] = useState<User | null>(null)
  const [logged, setLogged] = useState<boolean>(false)
  const [err, setErr] = useState<string>('No errors')

  useEffect(() => {
    async function login() {
      const res = await publicRequest.get(_ME)
      !res && setErr('No Actual Request from server')
      if (res.data.err) {
        
        setErr(res.data.err)
        console.log(res.data);
      } else {
        console.log('user init ', res.data.user)
        setUser(res.data.user)

        fetchCart()
        setLogged(true)
      }
    }
    login()
    console.log('runing fetch user')
  }, [])

  async function logout() {
    setUser(null)
    setLogged(false)
    setErr('')
  }

  const dispatch = useDispatch()
  async function fetchCart() {
    const res = await cartReqHandler.get(CART_PRODUCTS)
    if (!res.data || res.data.err) {
      console.log('FETCH_CART ISSUES')
      return
    }
    console.log(res.data.data)

    res.data.data.map((citem: any) => dispatch(addToCart(citem)))
  }

  async function login() {
    const res = await publicRequest.get(_ME)
    !res && setErr('No Actual Request from server')
    if (res.data.err) {
      setErr(res.data.err)
    } else {
      setLogged(true)
      console.log('user init ', res.data.user)
      setUser(res.data.user)

      fetchCart()
    }
  }
  return (
    <UserContext.Provider value={{ user, logged, err, addItemsToCart, login }}>
      {props.children}
    </UserContext.Provider>
  )
}
