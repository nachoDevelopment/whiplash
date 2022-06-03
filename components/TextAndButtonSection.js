import React from 'react'
import Link from 'next/link'

export default function PageHeader({details}) {
  return (
    <div className='mx-auto relative px-8 py-14 flex justify-between items-center'>
      <div className='relative z-1'>
        <h1 className='font-secondary text-6xl'>
          {details.title}
          <span className='text-yellow-400 text-[72px] leading-10'>.</span>
        </h1>
        <div className='flex flex-col'>
          <h2 className='font-tertiary text-lg tracking-wide uppercase'>
            {details.subtitle.split(',').map((item, i) => {
              return (
                <span
                  key='i'
                  className={`relative pr-6 font-urban text-lg tracking-widest ${
                    i > 0
                      ? 'before:absolute before:bg-primary-button before:h-1 before:w-1 before:rounded-full before:top-2/4 before:-translate-y-2/4 before:-left-3'
                      : ''
                  }`}>
                  {item}
                </span>
              )
            })}
          </h2>
          <p className='font-tertiary font-light text-sm tracking-wide mt-3 w-[40ch]'>
            {details.text}
          </p>
        </div>
      </div>
      <Link href='/'>
        <a className='bg-primary-button text-white py-3 px-6 mt-9 w-fit h-fit'>
          {details.buttonText}
        </a>
      </Link>
    </div>
  )
}
