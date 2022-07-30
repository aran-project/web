import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
type propType = {
  children: any
}
const Layout: React.FC<propType> = ({ children }) => {
  const router = useRouter()
  console.log()

  return (
    <main className="bgq-[#121212x]  bg-primary-bg-color1 h-[100vh] max-h-max min-h-screen w-full   overflow-x-hidden  bg-slate-200 pt-8">
      <Nav />
      <div className="z-20 mx-auto mt-10  h-auto w-screen max-w-[80%]   py-10 ">
        {children}
      </div>
      {/* <section className="h-screen"></section> */}
      {router.pathname === '/' && <Footer />}
    </main>
  )
}
export default Layout
