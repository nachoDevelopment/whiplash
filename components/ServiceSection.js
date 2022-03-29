import React from 'react'
import Link from 'next/link'
import Modal from './Modal'
import {string} from 'postcss-selector-parser'

export default function ServiceSection({details}) {
  function isOdd(num) {
    return num % 2
  }
  return (
    <div className='my-16 mx-auto flex flex-wrap justify-center'>
      {details.service.map((section, i) => (
        <div
          key={section.id}
          className={`my-12 px-6 w-full md:w-1/2 mx-auto ${
            isOdd(i) ? 'md:border-l border-gray-500' : ''
          }`}>
          <div className='mx-auto w-max'>
            <h3 className='font-secondary text-5xl'>{section.serviceTitle}</h3>
            <div className='relative'>
              {section.serviceSubtitle.split(',').map((item, i) => {
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
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8'>
              <div className='font-urban my-4'>
                <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                  {section.serviceOption1}
                </p>
                <p className='font-light text-sm uppercase tracking-widest'>
                  {section.serviceOption1Description}
                </p>
              </div>
              <div className='font-urban my-4'>
                <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                  {section.serviceOption2}
                </p>
                <p className='font-light text-sm uppercase tracking-widest'>
                  {section.serviceOption2Description}
                </p>
              </div>
              <div className='font-urban my-4'>
                <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                  {section.serviceOption3}
                </p>
                <p className='font-light text-sm uppercase tracking-widest'>
                  {section.serviceOption3Description}
                </p>
              </div>
              <div className='font-urban my-4'>
                <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                  {section.serviceOption4}
                </p>
                <p className='font-light text-sm uppercase tracking-widest'>
                  {section.serviceOption4Description}
                </p>
              </div>
            </div>
            {/* <Link href='/'>
              <a className='bg-primary-button text-white py-3 px-6 mt-9 w-fit shadow-2xl shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.3)]'>
                {section.buttonText}
              </a>
            </Link> */}
            <Modal section={section} />
          </div>
        </div>
      ))}
    </div>
  )
}
