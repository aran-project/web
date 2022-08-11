import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import UserProvider from '../hooks/UserContext'
import { Provider } from 'react-redux'
import { store } from '../reduc/store'
type Props = AppProps & {
  Component: any
}
// import 'bootstrap/dist/css/bootstrap.css'
export default ({ Component, pageProps }: Props) => {
  return (
    <Provider store={store}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </Provider>
  )
}
