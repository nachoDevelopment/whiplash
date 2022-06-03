import React from 'react'
import PageHeader from './PageHeader'
import PlainTextSection from './PlainTextSection'
import ServiceSection from './ServiceSection'
import CTA from './CTA'
import PortfolioSection from './PortfolioSection'
import ImageTextBlock from './ImageTextBlock'
import ProductsSection from './ProductsSection'

export default function PageContent({details}) {
  if (details.__typename === 'PageHeaderRecord') {
    return <PageHeader details={details} />
  } else if (details.__typename === 'PlainTextSectionRecord') {
    return <PlainTextSection details={details} />
  } else if (details.__typename === 'ServiceSectionRecord') {
    return <ServiceSection details={details} />
  } else if (details.__typename === 'CtaRecord') {
    return <CTA details={details} />
  } else if (details.__typename === 'PortfolioSectionRecord') {
    return <PortfolioSection details={details} />
  } else if (details.__typename === 'ImageTextBlockRecord') {
    return <ImageTextBlock details={details} />
  } else if (details.__typename === 'ProductEmbedRecord') {
    return <ProductsSection details={details} />
  }
  return (
    <div>
      <h1>Home Page Section</h1>
    </div>
  )
}
