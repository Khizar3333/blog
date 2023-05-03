import Navbar from '@/components/Navbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  console.log('i am red')
  return<>
  <Navbar/> 
  <Component {...pageProps} />
  </>
}
