import Head from 'next/head'
import {useRouter} from 'next/router'
import Navbar from './navBar'
import Footer from './footer'

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

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other music events',
  keywords: 'dj, music, edm, events',
}
