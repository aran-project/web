import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modals'
import { UserContext } from '../hooks/UserContext'
import { RootState } from '../reduc/store'
import { BuyCartItem } from '../utils/apiCalls'
import { ORDER, publicRequest, PRODUCT } from '../utils/apiEndpoints'
export default () => {
  const cartData = useSelector((state: RootState) => state.cart)
  const [modalOpen, setmodalOpen] = useState(false)
  const { logged } = useContext(UserContext)
  const [stripeKey, setStripeKey] = useState()
  const onToken = (token: any) => {
    setStripeKey(token)
  }

  if (cartData.items.length == 0) {
    return <div>Empty Cart</div>
  }
  return (
    <>
      <div className="flex w-72 justify-between whitespace-nowrap text-4xl font-medium text-gray-900">
        <h2>Your Cart</h2>
      </div>
      <main className="z-30  flex h-full">
        <div className="mt-6 grid grid-cols-1   justify-center gap-y-10 gap-x-4 sm:w-2/3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartData &&
                cartData.items.map(({ id, quantity, product }: any) => (
                  <>
                    {modalOpen && (
                      <Modal
                        trigFn={() => {
                          publicRequest
                            .post(ORDER, {
                              pid: product.id,
                              quantity,
                              address: 'some rangoem addre',
                              shipmentName: 'bobbbby',
                            })
                            .then(({ data }) => {
                              console.log(data)
                            })
                        }}
                        body="Are you sure you want to buy the product? You have to fill the form and you are good to go."
                        head={'Confirm to Buy'}
                        disable={!logged}
                      />
                    )}
                    <li className="flex py-6" key={id}>
                      <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumb}
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          className="h-full w-full object-cover object-center"
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
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:w-2/3">
          <div className="flex  w-3/5  flex-col rounded-sm bg-slate-50  px-8 pt-8">
            <div className="flex w-72 justify-between whitespace-nowrap text-2xl font-medium text-gray-900">
              <h1>
                <a href="#"> {'Order Summary'} </a>
              </h1>
            </div>
            <ul
              role="list"
              className="mt-8 flex  flex-col gap-y-2 divide-y divide-gray-200"
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

              <li className="flex w-full justify-between  whitespace-nowrap py-2 text-base font-medium text-gray-900">
                <h3>
                  <a href="#"> {'Total'} </a>
                </h3>
                <p className="ml-4">{`$${'2000'}`}</p>
              </li>
            </ul>
            <div className="mt-auto mb-4  flex whitespace-nowrap py-2 text-base font-medium text-gray-900">
              <button className="w-full rounded-sm bg-indigo-600 py-4 px-4 text-sm text-white ">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </main>
      <br />
    </>
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
