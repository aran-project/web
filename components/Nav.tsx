import { Fragment, useContext, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { UserContext } from '../hooks/UserContext'
import { publicRequest, _ME } from '../utils/apiEndpoints'
import { useSelector } from 'react-redux'
import { RootState } from '../reduc/store'

const navigation = [
  { name: 'Features', href: '/Features' },
  { name: 'shop', href: '/shop' },
  { name: 'Company', href: '/about' },
  { name: 'Cart', href: '/cart', badge: true },
]
const Nav: React.FC = () => {
  const { logged, user, err } = useContext(UserContext)

  const q = useSelector((state: RootState) => state.cart.quantity)
  return (
    <>
      <Popover>
        <div className="absolute top-0 z-50 w-screen items-center justify-between border-b bg-primary-bg-color py-4    shadow-sm">
          <nav
            className="relative mx-auto flex max-w-screen-2xl items-center justify-between sm:h-10"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between px-8 md:w-auto">
                <a href="/">
                  <div className="flex h-10 cursor-pointer items-center   text-center font-cur text-2xl text-warmGray-900 text-opacity-80 drop-shadow-sm">
                    Aran windows
                  </div>
                </a>
                <div className="flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-indigo-100 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-medium text-gray-500  hover:text-gray-900"
                >
                  {item.name}
                  {item.badge && q > 0 && (
                    <span className="absolute -top-2 -right-2 text-sm text-indigo-600">
                      {q}
                    </span>
                  )}
                </a>
              ))}

              {logged ? (
                <Link href={'/profile'}>
                  <div className="inline-block h-8  w-8 cursor-pointer justify-center align-middle shadow-sm">
                    <img
                      className="h-fulls w-full rounded-full object-cover  ring-2 ring-zinc-300 "
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </Link>
              ) : (
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              )}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-4 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img className="h-20 w-auto" src="logo1.png" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                  <span className="sr-only">Close main menu</span>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href="/login"
                className="block w-full bg-gray-50 px-5 py-2 text-center font-medium text-indigo-600 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
export default Nav
