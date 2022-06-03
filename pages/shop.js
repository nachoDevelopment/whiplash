import Layout from '../components/layout'
import {gql, GraphQLClient} from 'graphql-request'
import PageContent from '../components/PageContent'
import Image from 'next/image'
import Script from 'next/script'

export default function Home({shop}) {
  return (
    <div className='bg-primary-background relative overflow-hidden'>
      <div className='absolute -right-0'>
        <Image src='/bubble-1.png' alt='bubble' width={207} height={235} />
      </div>
      <div className='absolute -right-0 top-20'>
        <Image src='/bubble-2.png' alt='bubble' width={184} height={953} />
      </div>
      <div className='absolute -left-0 top-20'>
        <Image src='/bubble-3.png' alt='bubble' width={188} height={1054} />
      </div>
      <div className='absolute -left-0 top-[1118px]'>
        <Image src='/bubble-4.png' alt='bubble' width={277} height={1054} />
      </div>
      <div className='absolute -right-0 top-[1900px]'>
        <Image src='/bubble-5.png' alt='bubble' width={106} height={776} />
      </div>
      <div className='absolute -right-0 top-[3100px]'>
        <Image src='/bubble-6.png' alt='bubble' width={139} height={795} />
      </div>
      <div className='absolute -left-0 top-[3700px]'>
        <Image src='/bubble-7.png' alt='bubble' width={54} height={975} />
      </div>
      <div className='absolute -right-0 top-[3900px]'>
        <Image src='/bubble-8.png' alt='bubble' width={139} height={795} />
      </div>
      <Layout>
        <div className='relative'>
          {shop.pageContent.map((section) => (
            <PageContent details={section} key={section.id} />
          ))}
        </div>
      </Layout>
    </div>
  )
}

const query = gql`
  query {
    shop {
      id
      name
      pageContent {
        ... on PageHeaderRecord {
          __typename
          bigTitle
          smallTitle
          buttonText
          description
          backgroundImage {
            responsiveImage(
              imgixParams: {fit: crop, w: 300, h: 300, auto: format}
            ) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
          id
        }
        ... on PlainTextSectionRecord {
          text
          __typename
        }
        ... on ServiceSectionRecord {
          service {
            serviceTitle
            serviceSubtitle
            serviceOption1
            serviceOption2
            serviceOption3
            serviceOption4
            serviceOption1Description
            serviceOption2Description
            serviceOption3Description
            serviceOption4Description
            serviceOption1LongDescription
            serviceOption2LongDescription
            serviceOption3LongDescription
            serviceOption4LongDescription
            buttonText
            id
          }
          __typename
        }
        ... on CtaRecord {
          text
          buttonText
          buttonUrl
          __typename
        }
        ... on PortfolioSectionRecord {
          title
          subtitle
          intro
          buttonText
          buttonUrl
          __typename
          porfolioEntry {
            image {
              responsiveImage(
                imgixParams: {fit: crop, w: 500, h: 500, auto: format}
              ) {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
              }
            }
            title
          }
        }
        ... on ImageTextBlockRecord {
          title
          subtitle
          text
          imageAlignment
          image {
            responsiveImage(imgixParams: {auto: format}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
          buttonText
          buttonUrl
          __typename
        }
        ... on ProductEmbedRecord {
          __typename
          id
          products {
            id
            productTitle
            productUrl
            productCategory
            productPrice
          }
        }
      }
    }
  }
`

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application.json',
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  })
  const homePage = await graphQLClient.request(query)

  return {
    props: homePage,
  }
}
