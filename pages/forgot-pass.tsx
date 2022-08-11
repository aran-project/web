import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

import React from 'react'
import { publicRequest, LOG_IN } from '../utils/apiEndpoints'
import Modal from '../components/Modals'

const Login: NextPage = () => {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    pass: '',
    confirmPass: '',
    err: 'Please Enter a password.',
  })
  const [err, setErr] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setUserDetails({ ...userDetails, [target.name]: target.value })
  return (
    <div className="mx-auto flex h-full w-full max-w-xs flex-col justify-center ">
      <form className="mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`focus:shadow-outline mb-3 w-full appearance-none rounded border ${
              userDetails.pass !== userDetails.confirmPass && 'border-red-500'
            } py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none`}
            id="password"
            type="password"
            name="pass"
            value={userDetails.pass}
            placeholder="super Strong Pass"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="confirmPass"
          >
            confirm password
          </label>
          <input
            className={`focus:shadow-outline mb-3 w-full appearance-none rounded border ${
              (userDetails.pass.length < 5 ||
                userDetails.pass !== userDetails.confirmPass) &&
              'border-red-500'
            } py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none`}
            id="confirmPass"
            type="password"
            name="confirmPass"
            value={userDetails.confirmPass}
            placeholder="same as above"
            onChange={handleChange}
          />

          {userDetails.err && (
            <p className="text-xs italic text-red-500">{userDetails.err}</p>
          )}
        </div>
        <div className="flex items-center justify-between gap-y-14">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={async () => {
              if (!userDetails.pass || !userDetails.confirmPass) {
                return setErr('Fields Required')
              }
              if (
                userDetails.pass.length < 5 ||
                userDetails.pass !== userDetails.confirmPass
              ) {
                return setErr('PassWord Does not match')
              }
              // const res = await publicRequest.post(_LOG_IN, userDetails)
              // if (res.data && res.data.err) {
              //   setUserDetails({ ...userDetails, err: res.data.err })
              //   return
              // }
              // router.push('/')
              console.log(' ok')
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Acme Corp. All rights reserved.
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
