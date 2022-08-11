import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../../components/Modals'
import Modals from '../../components/Modals'

import SidePanel from '../../components/SidePanel'
import { UserContext } from '../../hooks/UserContext'
import { addToCart } from '../../reduc/cartReducer'
import { publicRequest, PRODUCT } from '../../utils/apiEndpoints'
import { IProduct } from '../../utils/globals'

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]
type pageProps = {
  product: IProduct
}
export default ({ product }: pageProps) => {
  const [isPromptOpen, setPromptOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)
  let err = ''
  const { logged } = useContext(UserContext)

  // const pid = useRouter().query.id
  const router = useRouter()
  const dispatch = useDispatch()
  const { addItemsToCart } = useContext(UserContext)
  return (
    <div className="mx-auto grid h-full  max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8  px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        {isPromptOpen && (
          <Modals
            body="Are you sure you want to buy the product? You have to fill the form and you are good to go."
            head={'Confirm to Buy'}
            disable={!logged}
            trigFn={() => {}}
          />
        )}
        <div className="mb-5 flex w-full">
          <h2 className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
            {product.name}
          </h2>
        </div>
        <div className="flex w-full flex-nowrap whitespace-nowrap">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Specifications
          </h2>
          <button
            className="ml-8 block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md"
            onClick={
              async () => {
                // true or id is successs
                if (!logged) {
                  return setModalOpen(true)
                }
                const cartProductId = await addItemsToCart({
                  product,
                  quantity: 1,
                })

                cartProductId &&
                  dispatch(
                    addToCart({
                      id: cartProductId,
                      product,
                      quantity: 1,
                      total: product.price,
                    })
                  )
                setCartOpen(true)
              }
              // setPromptOpen(!isPromptOpen)
            }
          >
            Add To Cart
          </button>
          <button
            className="ml-8 block rounded-lg bg-sec-color-dark-1 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md"
            onClick={() => setCartOpen(!isCartOpen)}
          >
            Cart
          </button>
        </div>

        <p className="mt-4 text-gray-500">
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid  grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {product &&
          product.images.slice(1, 5).map((img: string) => {
            return (
              <img
                src={img}
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="h-52 transform rounded-lg border-b bg-gray-100 shadow-md transition-all duration-150 hover:scale-105"
                key={img}
              />
            )
          })}
      </div>
      {modalOpen && (
        <Modal
          key={'Auth modal'}
          head={"Can't be add to cart"}
          body={'You have to login to add to cart'}
          trigFn={() => {
            router.push('/login')
            setModalOpen(false)
          }}
          goTo={'Login To Continue'}
          disable={false}
        />
      )}
      <SidePanel open={isCartOpen} setOpen={setCartOpen} />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await publicRequest.get(PRODUCT)
  if (!res.data) {
    return {
      paths: [],
      fallback: true,
    }
  }
  const paths = res.data.data.map((product: IProduct) => ({
    params: { id: product.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await publicRequest.get(PRODUCT + params!.id)
  if (!res.data) {
    return {
      props: {
        data: [],
      },
    }
  }
  return {
    props: {
      product: res.data.data,
    },
  }
}
