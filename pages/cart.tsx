import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modals'
import { UserContext } from '../hooks/UserContext'
import { removeFromCart } from '../reduc/cartReducer'
import { RootState } from '../reduc/store'
import { BuyCartItem } from '../utils/apiCalls'
import {
  ORDER,
  publicRequest,
  PRODUCT,
  cartReqHandler,
} from '../utils/apiEndpoints'
export default () => {
  const cartData = useSelector((state: RootState) => state.cart)
  const [modalOpen, setmodalOpen] = useState<any>(false)
  const { logged, user } = useContext(UserContext)
  const [stripeKey, setStripeKey] = useState()
  const onToken = (token: any) => {
    setStripeKey(token)
  }

  if (cartData.items.length == 0) {
    return (
      <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:py-20 md:px-44 lg:flex-row lg:px-24 lg:py-24">
        <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-2xl font-bold text-gray-800">
                  Looks like you've not added any products to the cart
                </h1>
                <p className="my-2 text-gray-800">
                  so! Please visit our shop section to get where you need to go.
                </p>
                <a href="\shop">
                  <button className="md my-2 rounded border bg-indigo-600 py-4 px-8 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-full lg:w-auto">
                    Take me there!
                  </button>
                </a>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="/noCart.png" className="w-96" />
        </div>
      </div>
    )
  }
  const dispatch = useDispatch()
  return (
    <div className="mx-auto">
      <div className=" flex w-72 justify-between whitespace-nowrap text-4xl font-medium text-gray-900">
        <h2>Your Cart</h2>
      </div>
      <main className="z-30  flex flex-row flex-wrap lg:flex-nowrap">
        <div className="mt-6 grid grid-cols-1   justify-center gap-y-10 gap-x-4 sm:w-2/3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartData &&
                cartData.items.map(({ id, quantity, product }: any) => {
                  return (
                    <>
                      {modalOpen && (
                        <Modal
                          trigFn={async () => {
                            console.log('modalOpen', modalOpen)
                            const stripe_checkout_url = BuyCartItem({
                              address: 'random addres',
                              pid: modalOpen.id,
                              quantity: modalOpen.quantity,
                              shipmentName: user!.name,
                            })
                            console.log(stripe_checkout_url)
                            dispatch(
                              removeFromCart({
                                id,
                              })
                            )
                            const res = await cartReqHandler.delete(
                              id!.toString()
                            )
                            console.log(
                              'After deleting the product in the cart',
                              res
                            )
                            // publicRequest
                            //   .post(ORDER, {
                            //     pid: product.id,
                            //     quantity,
                            //     address: 'some rangoem addre',
                            //     shipmentName: 'bobbbby',
                            //   })
                            //   .then(({ data }) => {
                            //     console.log(data)
                            //   })
                            setmodalOpen(false)
                          }}
                          body="Are you sure you want to buy the product? You Can Either Pay the Payment upfront or via stripe. Mail is Sent To Your email address"
                          head={'Confirm to Buy'}
                          disable={!logged}
                          onClose={() => {
                            setmodalOpen(false)
                          }}
                        />
                      )}
                      <li
                        className="my-4 flex w-max rounded-md bg-slate-50 py-6 px-4 shadow-md  "
                        key={id + product.name}
                      >
                        <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
                          <img
                            src={product.thumb}
                            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                            className="h-full w-full transform object-cover object-center transition-all duration-150 hover:scale-105"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col py-2">
                          <div>
                            <div className="flex w-72 justify-between whitespace-nowrap text-base font-medium text-gray-900">
                              <h3>
                                <a href="#"> {product.name} </a>
                              </h3>
                              <p className="ml-4">{`$${product.price}`}</p>
                            </div>
                            <div className="flex whitespace-nowrap text-base font-medium text-gray-900">
                              <p className="mt-1 text-sm text-gray-500">
                                {product.size.join('    |    ')}
                              </p>
                            </div>
                          </div>
                          <div className="mt-8    flex whitespace-nowrap  text-base font-medium text-gray-900">
                            <button
                              className="w-full rounded-sm bg-indigo-600 py-4 px-4 text-sm text-white hover:bg-indigo-700 "
                              onClick={() => {
                                setmodalOpen(product)
                                // const stripe_checkout_url = BuyCartItem({
                                //   address: 'random addres',
                                //   pid: product.id,
                                //   quantity,
                                //   shipmentName: 'bob',
                                // })
                                // console.log(stripe_checkout_url)
                              }}
                            >
                              Check Out
                            </button>
                          </div>
                          <div className="flex flex-1 items-end  justify-center text-sm ">
                            <p className="text-gray-500">Qty {quantity}</p>
                            <p className="flex flex-row items-center text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Available
                            </p>
                            <div className="ml-auto flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={async () => {
                                  dispatch(
                                    removeFromCart({
                                      id,
                                    })
                                  )
                                  const res = await cartReqHandler.delete(
                                    id!.toString()
                                  )
                                  console.log(
                                    'After deleting the product in the cart',
                                    res
                                  )
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </>
                  )
                })}
            </ul>
          </div>
        </div>
        <div className="mt-6 h-96 w-full">
          <div className="flex  h-max flex-col rounded-md bg-slate-50 py-6  px-8  pt-8  shadow-md lg:w-3/5">
            <div className="flex justify-between whitespace-nowrap text-2xl font-medium text-gray-900 lg:w-72">
              <h1>
                <a href="#"> {'Order Summary'} </a>
              </h1>
            </div>
            <ul
              role="list"
              className="mt-8 mb-6  flex flex-col gap-y-2 divide-y divide-gray-200"
            >
              <li className="flex  w-full justify-between whitespace-nowrap py-2 text-base font-medium text-gray-900">
                <h3>
                  <a href="#"> Sub Total </a>
                </h3>
                <p className="ml-4">{`$${cartData.total}`}</p>
              </li>
              <li className="flex w-full justify-between whitespace-nowrap py-2 text-base font-medium text-gray-900">
                <a href="#"> {'Tax Estimate'} </a>
                <h3></h3>
                <p className="ml-4">{`$${'20'}`}</p>
              </li>
              <li className="flex w-full justify-between  whitespace-nowrap py-2 text-base font-medium text-gray-900">
                <h3>
                  <a href="#"> {'Shipping Estimate'} </a>
                </h3>
                <p className="ml-4">{`$${'100'}`}</p>
              </li>

              <li
                className="flex w-full   justify-between whitespace-nowrap rounded-md bg-indigo-600 py-4 
              
              
              px-4 text-base font-medium  text-white  shadow-sm "
              >
                <h3>
                  <a href="#"> {'Total'} </a>
                </h3>
                <p className="ml-4">{`$${cartData.total}`}</p>
              </li>
            </ul>
            {/* <div className="mt-auto mb-4  flex whitespace-nowrap py-2 text-base font-medium text-gray-900">
              <button className="w-full rounded-sm bg-indigo-600 py-4 px-4 text-sm text-white ">
                Check Out
              </button>
            </div> */}
          </div>
        </div>
      </main>
      <br />
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
