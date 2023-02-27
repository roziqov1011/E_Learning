import { Provider } from '@/components/Context/Context'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Provider>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}
