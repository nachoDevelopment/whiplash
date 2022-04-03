import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PlainTextSection({details}) {
  return (
    <div
      className={`my-16 mx-auto px-8 flex flex-col-reverse md:flex-row ${
        details.imageAlignment == true ? '' : 'md:flex-row-reverse'
      }`}>
      <div className={`md:w-3/6 mx-7 my-6 h-[300px] md:h-[555px] relative`}>
        <Image
          layout='fill'
          objectFit='contain'
          quality={100}
          src={details.image.responsiveImage}
          alt={details.image.alt}
        />
      </div>
      <div className='md:w-3/6 mx-7 my-auto'>
        <h2 className='font-secondary text-5xl text-primary-softGrey'>
          {details.title}
        </h2>
        <h3
          className={`text-lg text-primary-button tracking-widest ml-4 mb-2 -mt-5 ${
            details.title ? '' : 'ml-0 font-secondary'
          }`}>
          {details.subtitle}
        </h3>
        <div
          className='font-light text-sm tracking-widest leading-7 service-option'
          dangerouslySetInnerHTML={{
            __html: details.text,
          }}></div>
        <Link href={details.buttonUrl}>
          <a className='bg-primary-button text-white font-urban tracking-wider py-3 px-6 mt-9 w-fit block shadow-2xl shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.3)]'>
            {details.buttonText}
          </a>
        </Link>
      </div>
    </div>
  )
}
