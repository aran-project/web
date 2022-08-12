import Link from 'next/link'
import { useState } from 'react'

export default function Product({
  product,
  extra,
}: {
  product: any
  extra?: boolean
}) {
  let idx = 0
  const [thumb, setThumb] = useState(product.thumb)
  return (
    <div className="ml-8 mb-8 flex">
      <div className=" transform rounded-xl bg-primary-bg-color-transparent p-6 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <img
          className="mx-auto h-32 w-72 overflow-hidden rounded-t-md rounded-b-sm object-cover"
          src={thumb}
          alt=""
        />
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
            <span
              className="mt-3 flex w-8 transform cursor-pointer space-x-4 rounded-full border-4 p-1 transition duration-200 hover:scale-105"
              onClick={() => {
                setThumb(product.images[idx])
                idx = (idx + 1) % product.images.length
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            {product.size.length} sizes
          </p>

          {/* <div className="mt-3 flex space-x-4 p-1">
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-green-200">
              <span
                className="block h-6 w-6 rounded-full bg-trueGray-800"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[0])
                }}
              >
                {' '}
              </span>
            </div>
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-blue-200">
              <span
                className="block h-6 w-6 rounded-full bg-trueGray-800"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[1])
                }}
              >
                {' '}
              </span>
            </div>
            <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-yellow-200">
              <span
                className="block h-6 w-6 rounded-full bg-trueGray-800"
                onClick={() => {
                  console.log('green')
                  setThumb(product.images[2])
                }}
              >
                {' '}
              </span>
            </div>
          </div> */}
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="block cursor-auto text-xl font-semibold text-gray-700">
              ₹{product.price}
            </button>
            <Link href={'/product/' + product.id}>
              <button className="block rounded-lg bg-slate-800 py-2 px-4 text-sm  text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
