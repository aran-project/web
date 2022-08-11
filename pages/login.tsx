import { NextPage } from 'next'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import React from 'react'
import { publicRequest, LOG_IN } from '../utils/apiEndpoints'
import { UserContext } from '../hooks/UserContext'
import Modal from '../components/Modals'

const Login: NextPage = () => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    email: '',
    pass: '',
    err: 'Please Enter a password.',
  })
  const [errModalOpen, setErrModalOpen] = useState(false)
  userDetails.err.length > 5 && setUserDetails({ ...userDetails, err: '' })
  const { login } = useContext(UserContext)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setUserDetails({ ...userDetails, [target.name]: target.value })
  return (
    <div className="mx-auto mt-48 flex h-[80%] w-full max-w-xs flex-col items-center justify-center align-middle ">
      <form className="mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`focus:shadow-outline mb-3 w-full appearance-none rounded border ${
              userDetails.pass.length < 5 && 'border-red-500'
            } py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none`}
            id="password"
            type="password"
            name="pass"
            value={userDetails.pass}
            placeholder="******************"
            onChange={handleChange}
          />

          {userDetails.err && (
            <p className="text-xs italic text-red-500">{userDetails.err}</p>
          )}
        </div>
        <div className="flex items-center justify-between gap-y-14">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4  text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={async () => {
              // if (!userDetails.email || !userDetails.pass) {
              // return alert('Fields Required')
              // }

              const res = await publicRequest.post(LOG_IN, userDetails)

              if (!userDetails.email || !userDetails.pass) {
                setErrModalOpen(true)
                setUserDetails({ ...userDetails, err: 'Field Required' })
              }
              if (res.data && res.data.err) {
                console.log('LOGIN_ERROR', res.data.err)
              } else {
                login()
                router.push('/')
              }
            }}
          >
            Sign In
          </button>
          <button className="inline-block align-baseline text-sm  text-gray-800 underline hover:text-blue-800">
            Forgot Password?
          </button>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Aran Windows Corp. All rights reserved.
      </p>
      {errModalOpen && (
        <Modal
          head="Login"
          body=""
          disable={false}
          trigFn={() => {
            setUserDetails({ ...userDetails, err: '' })
            setErrModalOpen(false)
          }}
        ></Modal>
      )}
    </div>
  )
}

export default Login
