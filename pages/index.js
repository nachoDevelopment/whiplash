import Layout from '../components/layout'
import {gql, GraphQLClient} from 'graphql-request'
import HomePageSection from '../components/HomePageSection'

export default function Home({homePage}) {
  return (
    <div className='bg-primary-background'>
      <Layout>
        <div>
          {homePage.pageContent.map((section) => (
            <HomePageSection details={section} key={section.id} />
          ))}
        </div>
      </Layout>
    </div>
  )
}

const query = gql`
  query {
    homePage {
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
            buttonText
            id
          }
          __typename
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
