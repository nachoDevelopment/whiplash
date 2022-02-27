import React from 'react'

export default function PlainTextSection({details}) {
  return (
    <div className='my-16 mx-auto max-w-2xl'>
      <p className='font-tertiary font-light leading-7 tracking-widest'>
        {details.text}
      </p>
    </div>
  )
}
