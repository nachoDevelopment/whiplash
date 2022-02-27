import React from 'react'
import PageHeader from './PageHeader'
import PlainTextSection from './PlainTextSection'
import ServiceSection from './ServiceSection'

export default function HomePageSection({details}) {
  if (details.__typename === 'PageHeaderRecord') {
    return <PageHeader details={details} />
  } else if (details.__typename === 'PlainTextSectionRecord') {
    return <PlainTextSection details={details} />
  } else if (details.__typename === 'ServiceSectionRecord') {
    return <ServiceSection details={details} />
  }
  return (
    <div>
      <h1>Home Page Section</h1>
    </div>
  )
}