import { useEffect } from 'react'
import { publicRequest, _ALL_PRODUCTS } from '../utils/apiEndpoints'
import Product from './Product'

type pageProps = {
  cat: string
}
export default ({ cat }: pageProps) => {
  
  useEffect(() => {

    
    publicRequest.get(_ALL_PRODUCTS)
  }, [cat])

  return (
    <>
      <h1>Category</h1>
    </>
  )
}
