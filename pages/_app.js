import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
// import '../styles/style.css'

export default function App({ Component, pageProps }) {
  return<>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
