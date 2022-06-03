import React from 'react'
import Script from 'next/script'
import Image from 'next/image'

export default function ProductsSection({details}) {
  return (
    <section>
      <Script src='https://gumroad.com/js/gumroad.js'></Script>
      <div className='my-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 px-8'>
        {details.products.map((section, i) => (
          <div key={section.id} className='flex flex-col mx-auto'>
            <div className='w-full h-48 relative'>
              <Image
                layout='fill'
                objectFit='contain'
                className=''
                quality={100}
                src={section.productImage.responsiveImage}
                alt={section.productImage.alt}
              />
            </div>
            <div className='flex justify-between items-top'>
              <div className='mr-5'>
                <h3 className='font-tertiary uppercase tracking-widest text-lg'>
                  {section.productTitle}
                </h3>
                <span className='font-tertiary text-sm tracking-widest'>
                  {section.productCategory} | £{section.productPrice}
                </span>
              </div>
              <a
                className='bg-[#F6C67A] text-white py-2 px-2 w-fit rounded h-fit font-urban tracking-wider'
                href={section.productUrl}>
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
