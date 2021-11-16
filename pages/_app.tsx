import '@styles/global.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'src/context/index';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
        <Component {...pageProps} />
    </GlobalProvider>
  )
  
}

export default MyApp
