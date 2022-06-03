import Head from 'next/head'
import {useRouter} from 'next/router'
import Navbar from './navBar'
import Footer from './footer'
import Script from 'next/script'

export default function Layout({title, keywords, description, children}) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Poppins:wght@300;400&family=Work+Sans:wght@300;400;500&family=Urbanist:wght@300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Script src='https://gumroad.com/js/gumroad.js' />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Whiplash',
  description: 'Creative Elixirs for Online Brands',
  keywords: 'Creative Elixirs, Online Brands, Commercial Antidotes',
}
