import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Choice from '../../components/Choice'
import Product from '../../components/Product'
import { publicRequest, PRODUCT } from '../../utils/apiEndpoints'
import { IProduct } from '../../utils/globals'
type pageProps = {
  products: IProduct[]
}
export default ({ products }: pageProps) => {
  console.log('prodyucts', products)

  const [actualProducts, setproducts] = useState(products)
  const [cat, setCat] = useState({ id: 1, name: 'Doors' })
  const [filteredProducts, setFilteredProducts] = useState(products)
  useEffect(() => {
    setFilteredProducts(
      actualProducts.filter((p) =>
        p.cateGory
          ?.map((cat) => cat.name.toLowerCase())
          .includes(cat.name.toLowerCase())
      )
    )
    // ;(async function () {
    //   const res = await publicRequest.get(
    //     PRODUCT + 'getByCat/' + ((cat && cat.name.toString()) || 'Doors')
    //   )
    // })()
    console.log('filtereed ', filteredProducts)
  }, [cat])

  const router = useRouter()
  if (!products || router.isFallback) {
    return <div>shop</div>
  }

  return (
    <div className="">
      <div className="mx-auto">
        <span className="ml-9 mb-6 flex items-center gap-4">
          <Choice
            trFn={(cat) => {
              setCat(cat)
            }}
          />
          <h1 className="text-4xl font-bold text-gray-700">Shop</h1>
        </span>
        <br />
        <div className="mt-6 grid  grid-cols-1 items-center justify-center gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((p) => (
            <Product product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const res = await publicRequest.get(PRODUCT)
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
