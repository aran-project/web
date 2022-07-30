import { ShoppingCartIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../components/Footer'
const categories = [
  {
    name: 'Doors',
    thumb: 'https://wallpaperaccess.com/full/2225096.jpg',
    desc: 'The Entry To your Life',
  },
  {
    name: 'Windows',
    desc: 'The Entry To your Life',

    thumb:
      'https://cdn.wallpaperhub.app/cloudcache/7/c/2/f/3/4/7c2f345bdfcadb8a3faf483ebaa2e9aea712bbdb.jpg',
  },

  {
    name: 'Basic',
    desc: 'The Entry To your Life',
    thumb:
      'data:image/jpeg;base64,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',
  },
]
const Home: NextPage = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 bottom-0 right-0  -z-50 h-screen  w-screen opacity-80"
        draggable={false}
      >
        <img
          src="https://www.howtogeek.com/wp-content/uploads/2021/07/windows-10-logo.jpeg?width=1198&trim=1,1&bg-color=000&pad=1,1"
          className="-z-50 h-full w-full object-cover "
        />
      </div>
      <main className="z-30 flex h-full min-h-screen ">
        <div className="mt-36 flex flex-col sm:w-2/3">
          <span className="mb-12 h-2  bg-gray-800 dark:bg-white "></span>
          <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
            When god closes a door, He Opens a
            <span className="text-5xl sm:text-7xl">Window</span>
          </h1>
          <p className="text-sm text-gray-700 dark:text-white sm:text-base">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>

          <div className="mt-5 flex items-baseline sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/register"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-900 md:py-4 md:px-10 md:text-lg"
              >
                {' '}
                Join Us{' '}
              </a>
            </div>
            <div className="mt-3  sm:mt-0 sm:ml-3 ">
              <a
                href="/about"
                className="flex w-full items-center justify-center rounded-md border-2 border-transparent border-gray-800 bg-transparent px-8 py-3 text-base font-medium text-gray-800 hover:bg-indigo-50 hover:bg-opacity-10  md:py-4 md:px-10 md:text-lg"
              >
                Just Shop{' '}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxd4I-nmZwpRUP2x0pX_RVyoXHk5VNP-a8fw&usqp=CAU"
          className="m-auto max-w-xs md:max-w-sm"
        />
        </div> */}
      </main>

      <div className="relative mt-8 h-auto w-screen py-4 ">
        <div className="absolute top-0 left-0 right-0 h-56 w-[120%] -translate-x-1/4 bg-zinc-900"></div>
        <div className="absolute top-0 left-0 right-0 h-96 w-[120%] -translate-x-1/4 translate-y-1/2 bg-white"></div>
        <div className="z-50 flex items-center text-slate-200 dark:text-gray-800">
          <ShoppingCartIcon height={'3rem'} className="z-50" />
          <h1 className="z-50 ml-4 text-xl  font-semibold  leading-none ">
            What Do we Have in Our Store{'>'}{' '}
          </h1>
        </div>
        <div className="z-50 max-w-2xl  py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="mt-6  grid  grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((cat) => (
              <Link href={`/shop/${cat.name}`} key={cat.name}>
                <a className="">
                  <div className="group relative" draggable={false}>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full transform overflow-hidden  rounded-md bg-black  shadow-sm transition-all duration-150 group-hover:-translate-y-2 group-hover:shadow-md lg:h-80">
                      <img
                        src={cat.thumb}
                        alt={'product.imageAlt'}
                        className="z-50 h-full w-full object-cover object-center opacity-80 lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 -translate-y-8 text-4xl font-semibold text-white opacity-80 transition-all duration-300 group-hover:text-black">
                      {cat.name}
                    </div>
                    <div className="mt-4 flex -translate-y-10 justify-between opacity-0 transition-all  duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                      <div>
                        <h6 className="text-sm text-gray-700">{cat.desc}</h6>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
