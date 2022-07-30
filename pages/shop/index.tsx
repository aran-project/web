import { useRouter } from 'next/router'
import Product from '../../components/Product'
import { publicRequest, _ALL_PRODUCTS } from '../../utils/apiEndpoints'
import { IProduct } from '../../utils/globals'
type pageProps = {
  products: IProduct[]
}
export default ({ products }: pageProps) => {
  console.log('prodyucts', products)
  const router = useRouter()
  if (!products || router.isFallback) {
    return <div>shop</div>
  }

  return (
    <>
      shop
      <br />
      <div className="mt-6 grid  grid-cols-1 items-center justify-center gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products && products.map((p) => <Product product={p} />)}
      </div>
    </>
  )
}
export async function getStaticProps() {
  const res = await publicRequest.get(_ALL_PRODUCTS)
  if (!res.data) {
    return {
      props: {
        data: [],
        loading: true,
      },
    }
  }
  return {
    props: {
      products: res.data.data,
      loading: false,
    },
  }
}

// import Axios from 'axios'

// import { useEffect, useState } from 'react'
// import Product from '../components/Product'
// import { useFetch } from '../utils/useFetch'
// type ProductSectionProps = {
//   type: string
// }
// const ProductSection: React.FC<ProductSectionProps> = ({ type }) => {
//   const [products, loading, err] = useFetch(
//     `http://localhost:4000/api/products/cat/${type}`
//   )

//   if (loading) {
//     return null
//   }

//   if (!loading && err) {
//     return <div>{err}</div>
//   }
//   return (
//     <>
//       <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 opacity-90 sm:text-4xl">
//         {type}
//       </h2>
//       <div className="flex h-auto w-full flex-wrap">
//         {products!.map((product: any) => {
//           return <Product product={product} key={product.id} />
//         })}
//       </div>
//     </>
//   )
// }
