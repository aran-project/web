import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

import React from 'react'
import { publicRequest, LOG_IN } from '../utils/apiEndpoints'
import Modal from '../components/Modals'
import MailToSend from './MailToSEnd'

const Login: NextPage = () => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    pass: '',
    confirmPass: '',
    err: 'Please Enter a password.',
    mail: '',
  })
  const [err, setErr] = useState('')
  const [isMail, setisMail] = useState(false)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setUserDetails({ ...userDetails, [target.name]: target.value })
  return (
    <div className="mx-auto flex h-full w-full max-w-xs flex-col justify-center ">
      {isMail ? (
        <>
          <main
            id="content"
            role="main"
            className="mx-auto w-full max-w-md p-6"
          >
            <div className="mt-7 rounded-xl  bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Forgot password?
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember your password?
                    <a
                      className="font-medium text-blue-600 decoration-2 hover:underline"
                      href="#"
                    >
                      Login here
                    </a>
                  </p>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <div>
                        <label
                          htmlFor="pass"
                          className="ml-1 mb-2 block text-sm font-bold dark:text-white"
                        >
                          password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            id="pass"
                            name="pass"
                            className="block w-full rounded-md border-2 border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <p
                          className="mt-2 hidden text-xs text-red-600"
                          id="email-error"
                        >
                          Please include a valid password
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="confirmPass"
                          className="ml-1 mb-2 block text-sm font-bold dark:text-white"
                        >
                          confirm password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            id="confirmPass"
                            name="confirmPass"
                            className="block w-full rounded-md border-2 border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <p
                          className="mt-2 hidden text-xs text-red-600"
                          id="email-error"
                        >
                          Please include a valid password
                        </p>
                      </div>
                      <button
                        type="submit"
                        name="pass"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        onClick={() => setisMail(true)}
                      >
                        Confirm Pass
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <p className="mt-3 flex items-center justify-center divide-x divide-gray-300 text-center dark:divide-gray-700">
              <a
                className="inline-flex items-center gap-x-2 pr-3.5 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline dark:text-gray-500 dark:hover:text-gray-200"
                href="#"
                target="_blank"
              >
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Github
              </a>
              <a
                className="inline-flex items-center gap-x-2 pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline dark:text-gray-500 dark:hover:text-gray-200"
                href="#"
              >
                Contact us!
              </a>
            </p>
          </main>
        </>
      ) : (
        <>
          <main
            id="content"
            role="main"
            className="mx-auto w-full max-w-md p-6"
          >
            <div className="mt-7 rounded-xl  bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Forgot password?
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Remember your password?
                    <a
                      className="font-medium text-blue-600 decoration-2 hover:underline"
                      href="#"
                    >
                      Login here
                    </a>
                  </p>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="ml-1 mb-2 block text-sm font-bold dark:text-white"
                        >
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full rounded-md border-2 border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                            aria-describedby="email-error"
                          />
                        </div>
                        <p
                          className="mt-2 hidden text-xs text-red-600"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        onClick={() => setisMail(true)}
                      >
                        Reset password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <p className="mt-3 flex items-center justify-center divide-x divide-gray-300 text-center dark:divide-gray-700">
              <a
                className="inline-flex items-center gap-x-2 pr-3.5 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline dark:text-gray-500 dark:hover:text-gray-200"
                href="#"
                target="_blank"
              >
                <svg
                  className="h-3.5 w-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Github
              </a>
              <a
                className="inline-flex items-center gap-x-2 pl-3 text-sm text-gray-600 decoration-2 hover:text-blue-600 hover:underline dark:text-gray-500 dark:hover:text-gray-200"
                href="#"
              >
                Contact us!
              </a>
            </p>
          </main>
        </>
      )}
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Aran Corp. All rights reserved.
      </p>
      {err && (
        <Modal
          head={'Error'}
          body={err}
          trigFn={() => {
            setErr('')
          }}
          goTo={'try again'}
          disable={false}
        />
      )}
    </div>
  )
}

export default Login
