import React from 'react'
import Script from 'next/script'

export default function ProductsSection({details}) {
  return (
    <section>
      <Script src='https://gumroad.com/js/gumroad.js'></Script>
      <div className='my-16 mx-auto grid grid-cols-3 px-8'>
        {details.products.map((section, i) => (
          <div key={section.id}>
            <h3>{section.productTitle}</h3>
            <span>{section.productCategory}</span>
            <span>{section.productPrice}</span>
            <a
              className='bg-[#F6C67A] text-white py-2 px-2 w-fit rounded'
              href={section.productUrl}>
              View Product
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
