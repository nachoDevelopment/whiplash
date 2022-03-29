import React from 'react'
import Link from 'next/link'

export default function CTA({details}) {
  return (
    <div className='w-full flex flex-row justify-between items-center bg-primary-softGrey/20 px-8 py-5'>
      <p>{details.text}</p>
      <Link href={details.buttonUrl} type='button' className=''>
        <a className='bg-primary-cta text-white py-2 px-6 w-fit'>
          {details.buttonText}
        </a>
      </Link>
    </div>
  )
}
