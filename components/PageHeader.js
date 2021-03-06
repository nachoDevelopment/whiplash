import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PageHeader({details}) {
  return (
    <div className='mx-auto relative px-8 py-14 max-w-xl md:max-w-3xl'>
      <Image
        layout='fill'
        objectFit='contain'
        objectPosition='left'
        className=''
        quality={100}
        src={details.backgroundImage.responsiveImage}
        alt={details.backgroundImage.alt}
      />
      <div className='w-fit ml-auto relative z-1'>
        <h1 className='font-secondary text-5xl md:text-[105px]'>
          {details.bigTitle}
          <span className='text-yellow-400 text-[105px] md:text-[205px] leading-10'>
            .
          </span>
        </h1>
        <div className='w-9/12 ml-8 md:ml-auto flex flex-col'>
          <h2 className='font-tertiary text-lg tracking-wide uppercase -mt-3 md:-mt-5'>
            {details.smallTitle}
          </h2>
          <p className='font-tertiary font-light text-sm tracking-wide mt-3 w-[20ch] md:w-[30ch]'>
            {details.description}
          </p>
          <Link href='/'>
            <a className='bg-primary-button text-white py-3 px-6 mt-9 w-fit'>
              {details.buttonText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
