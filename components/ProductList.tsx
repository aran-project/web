import { useEffect } from 'react'
import { publicRequest, PRODUCT } from '../utils/apiEndpoints'
import Product from './Product'

type pageProps = {
  cat: string
}
export default ({ cat }: pageProps) => {
  useEffect(() => {
    publicRequest.get(PRODUCT)
  }, [cat])

  return (
    <>
      <h1>Category</h1>
    </>
  )
}
