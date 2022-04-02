import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioSection({details}) {
  return (
    <div className='px-8 my-16'>
      <h2 className='font-secondary text-5xl text-primary-softGrey'>
        {details.title}
      </h2>
      <h3 className='text-lg text-primary-button tracking-widest mb-2 -mt-5'>
        {details.subtitle}
      </h3>
      <p className='font-urban tracking-widest mb-8'>{details.intro}</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
        {details.porfolioEntry.map((entry, i) => (
          <div
            key={entry.id}
            className='relative min-h-[228px] flex justify-center items-center'>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className=''
              quality={100}
              src={entry.image.responsiveImage}
              alt={entry.image.alt}
            />
            <h3 className='z-1 relative text-white font-urban tracking-widest text-xl'>
              {entry.title}
            </h3>
          </div>
        ))}
      </div>
      <Link href={details.buttonUrl}>
        <a className='bg-primary-button text-white font-urban tracking-wider py-3 px-6 mt-9 w-fit block mx-auto shadow-2xl shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.3)]'>
          {details.buttonText}
        </a>
      </Link>
    </div>
  )
}
