import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Choice from '../../components/Choice'
import Product from '../../components/Product'
import { publicRequest, PRODUCT } from '../../utils/apiEndpoints'
import { IProduct } from '../../utils/globals'
type pageProps = {
  products: IProduct[]
  cat: string
}
export default ({ products, cat }: pageProps) => {
  console.log('prodyucts', products)
  const router = useRouter()

  return products && !router.isFallback ? (
    <>
      <span className="ml-9 flex items-center gap-4 ">
        <Choice choose={cat} />
        <h1 className="text-4xl font-bold text-gray-700">Shop</h1>
      </span>
      <br />
      <div className="mt-6 grid  grid-cols-1 items-center justify-center gap-y-10 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products && products.map((p) => <Product product={p} />)}
      </div>
    </>
  ) : (
    <div>There is No Category Named {cat}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await publicRequest.get(
    PRODUCT + 'getByCat/' + (params!.cat?.toString() || 'Doors')
  )
  if (!res.data) {
    return {
      props: {
        products: [],
        cat: params!.cat?.toString(),
      },
    }
  }
  return {
    props: {
      products: res.data.data,
      cat: params!.cat?.toString() || 'Doors',
    },
  }
}
