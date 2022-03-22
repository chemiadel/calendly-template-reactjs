import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps  } from 'next/app'
import type { CustomNextPage } from '_utils/types'
import LandingLayout from 'components/layouts/landing'
import AppLayout from 'components/layouts/app'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: {
  Component: CustomNextPage,
  pageProps: any
}) {

  const { layout }=Component

  if(layout==='landingLayout'){

    return <LandingLayout>
      <NextNprogress options={{ showSpinner: false }}/>
      <Component {...pageProps} />
      </LandingLayout>

  }

  if(layout==='appLayout'){

    return <AppLayout>
      <NextNprogress options={{ showSpinner: false }}/>
      <Component {...pageProps} />
      </AppLayout>
  }

  return <>
  <NextNprogress />
  <Component {...pageProps} options={{ showSpinner: false }}/>
  </>
}

export default MyApp
