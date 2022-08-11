import Axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

import React from 'react'
import { publicRequest, REGISTER } from '../utils/apiEndpoints'
import Modal from '../components/Modals'

const Register: NextPage = () => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    pass: '',
  })
  const [err, setErr] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setUserDetails({ ...userDetails, [target.name]: target.value })

  return (
    <div className="mx-auto mt-48 flex h-[80%] w-full max-w-xs flex-col items-center justify-center align-middle">
      <form className="my-auto mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
          />
        </div>
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
          {!userDetails.pass && (
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between  whitespace-nowrap">
          <button
            className="focus:shadow-outline mr-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={async () => {
              if (
                !userDetails.email ||
                !userDetails.name ||
                !userDetails.pass
              ) {
                return setErr('Field Required')
              }
              console.log(userDetails)
              try {
                const res = await publicRequest.post(REGISTER, userDetails)
                console.log('res', res)
                if (res.data && res.data.err) {
                  return setErr(res.data.err)
                } else {
                  return setErr('Register Success ! Please Login')
                  router.push('/login')
                }
              } catch (error) {
                return setErr('Something went wrong')
              }
            }}
          >
            Sign Up
          </button>
          <button className="inline-block align-baseline text-lg font-bold text-blue-500 hover:text-blue-800">
            Forgot Password?
          </button>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
      {err && (
        <Modal
          head={'Login Error'}
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

export default Register
